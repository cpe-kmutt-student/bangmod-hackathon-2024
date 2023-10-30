import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { insertStudent, insertTeam } from '$lib/server/database';
import { deserializeNested, prepareData } from '$lib/server/form';
import { TeamSchema } from '$lib/server/schema';
import type { Team, TeamFile } from '$lib/server/schema';
import { sendEmail } from '$lib/server/sendEmail';
import { UploadFile } from '$lib/server/storage';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const consent = url.searchParams.get('consent');
	const verify = url.searchParams.get('verify');
	if(!consent || !verify){
		throw redirect(302, "/policies")
	}

	const form = await superValidate(TeamSchema);

	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const { data, files } = deserializeNested(formData) as { data: Team; files: TeamFile };

		data.consent = true;

		const form = await superValidate(data, TeamSchema);

		if (!form.valid) {
			console.log(form.errors);
			return fail(400, { form });
		}

		const teamId = crypto.randomUUID();

		const { students, team } = prepareData(teamId, data, files);

		try {
			console.log(await insertTeam(team));
			console.log(students[0].team_id);
			await insertStudent(students);
		} catch (error) {
			console.log(error);
			return fail(500, { form });
		}

		const uploadPromise: Promise<unknown>[] = [
			UploadFile(team.teacher_citizen_card, files.teacher_citizen_card),
			UploadFile(team.teacher_verify, files.teacher_verify)
		];

		for (let i = 0; i < files.students.length; i++) {
			uploadPromise.push(
				UploadFile(students[i].image, files.students[i].image),
				UploadFile(students[i].citizen_card, files.students[i].citizen_card),
				UploadFile(students[i].student_card, files.students[i].student_card),
				UploadFile(students[i].student_certificate, files.students[i].student_certificate)
			);
		}

		try {
			await Promise.all(uploadPromise);
			await sendEmail({
				subject: 'สมัคร Bangmod Hackathon 2024 สำเร็จแล้ว',
				html: '<p>สมัคร Bangmod Hackathon 2024 สำเร็จแล้ว</p>',
				to: `${team.teacher_email}, ${students.map((s) => s.email).join(', ')}`
			});
		} catch (error) {
			console.log(error);
			return fail(500, { form });
		}

		return { form };
	}
};
