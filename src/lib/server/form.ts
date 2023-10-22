import set from 'lodash.set';

import type { Team, TeamFile } from '$lib/server/schema';

function deserializeNested(form: FormData) {
	const data: Record<string, unknown> = {};
	const files: Record<string, unknown> = {};

	for (const [key, value] of form) {
		if (value instanceof File) {
			set(files, key, value);
			set(data, key, value.name);
		} else {
			set(data, key, value);
		}
	}
	return {
		data: data,
		files: files
	};
}

const getExtension = (file: File) => {
	return file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2);
};

const prepareData = (teamId: string, data: Team, files: TeamFile) => {
	const { students, ...team } = data;

	delete team.__superform_id;
	team.id = teamId;
	team.teacher_citizen_card = `${teamId}/teacher_citizen_card.${getExtension(
		files.teacher_citizen_card
	)}`;
	team.teacher_verify = `${teamId}/teacher_verify.${getExtension(files.teacher_verify)}`;

	for (const [index, value] of students.entries()) {
		value.team_id = teamId;
		value.image = `${teamId}/${index}/image.${getExtension(files.students[index].image)}`;
		value.citizen_card = `${teamId}/${index}/citizen_card.${getExtension(
			files.students[index].citizen_card
		)}`;
		value.student_card = `${teamId}/${index}/student_card.${getExtension(
			files.students[index].student_card
		)}`;
		value.student_certificate = `${teamId}/${index}/student_certificate.${getExtension(
			files.students[index].student_certificate
		)}`;

		const dateParts = value.date_of_birth.split('/');
		value.date_of_birth = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]).toISOString();
	}

	return { team, students };
};

export { deserializeNested, prepareData };
