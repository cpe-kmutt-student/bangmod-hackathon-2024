import type { Actions } from './$types';
import { FlattenError, TeamSchema } from '$lib/server/utils/validator';
import { formSerializer } from '$lib/server/utils/formData';
import { fail } from '@sveltejs/kit';
import { UploadRandomName } from '$lib/server/storage';
import { insertStudent, insertTeam } from '$lib/server/database';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const { data, files } = formSerializer(formData);

		const result = TeamSchema.safeParse(data);

		if (!result.success) {
			const flattenError = FlattenError(result.error.format());
			return fail(400, { data: data, error: flattenError });
		}

		const folderName = crypto.randomUUID();

		const teamFileUpload: Promise<string>[] = [
			UploadRandomName(folderName, files.teacher_citizen_card),
			UploadRandomName(folderName, files.teacher_verify)
		];

		try {
			const teamFilepath = await Promise.all(teamFileUpload);
			data.teacher_citizen_card = teamFilepath[0];
			data.teacher_verify = teamFilepath[1];
		} catch (err) {
			console.log(err);
			return fail(500, { data: data, error: { message: 'Team File upload failed.' } });
		}

		try {
			const teamId = await insertTeam(data);
			data.students.forEach((i) => (i.team_id = teamId[0].id));
		} catch (err) {
			// TODO: Should remove or reuse file when database insert fail, because file is still in S3
			console.log(err);
			return fail(500, { data: data, error: { message: 'Insert Team fail.' } });
		}

		for (const [index, value] of files.students.entries()) {
			const studentFileUpload: Promise<string>[] = [
				UploadRandomName(`${folderName}/${index}`, value.image),
				UploadRandomName(`${folderName}/${index}`, value.citizen_card),
				UploadRandomName(`${folderName}/${index}`, value.student_card),
				UploadRandomName(`${folderName}/${index}`, value.student_certificate)
			];
			try {
				const studentFilepath = await Promise.all(studentFileUpload);
				data.students[index].image = studentFilepath[0];
				data.students[index].citizen_card = studentFilepath[1];
				data.students[index].student_card = studentFilepath[2];
				data.students[index].student_certificate = studentFilepath[3];
			} catch (err) {
				// TODO: Should remove or reuse file when database insert fail, because file is still in S3
				console.log(err);
				return fail(500, { data: data, error: { message: 'Student File upload failed.' } });
			}
		}

		try {
			await insertStudent(data.students);
		} catch (err) {
			console.log(err);
			return fail(500, { data: data, error: { message: 'Insert Team fail.' } });
		}

		// TODO: Add email sender API

		return { data: data, error: {} };
	}
};
