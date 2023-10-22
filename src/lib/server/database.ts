import postgres from 'postgres';

import type { Student, Team } from '$lib/server/schema';

import { DATABASE_URL } from '$env/static/private';

const sql = postgres(DATABASE_URL, {
	idle_timeout: 20,
	max_lifetime: 60 * 10
});

const insertTeam = (team: Omit<Team, 'students'>) => {
	const insertKeys: (keyof Omit<Team, 'students'>)[] = [
		'id',
		'name',
		'school_name',
		'teacher_prefix',
		'teacher_firstname',
		'teacher_lastname',
		'teacher_phone',
		'teacher_email',
		'teacher_contact',
		'teacher_address',
		'teacher_sub_district',
		'teacher_district',
		'teacher_province',
		'teacher_zipcode',
		'teacher_citizen_card',
		'teacher_verify',
		'teacher_disease',
		'teacher_drug',
		'teacher_allergies',
		'consent'
	];

	return sql<{ id: string }[]>`
    INSERT INTO team ${sql(team, insertKeys)} returning id
  `;
};

const insertStudent = (student: Student | Student[]) => {
	const insertKeys: (keyof Student)[] = [
		'team_id',
		'name_prefix',
		'firstname',
		'lastname',
		'nickname',
		'date_of_birth',
		'nationality',
		'race',
		'religion',
		'level',
		'address',
		'sub_district',
		'district',
		'province',
		'zipcode',
		'email',
		'phone',
		'contact',
		'image',
		'citizen_card',
		'student_card',
		'student_certificate',
		'disease',
		'drug',
		'allergies'
	];
	return sql<{ id: string }[]>`
    INSERT INTO student ${sql(student, insertKeys)}
  `;
};

export { insertTeam, insertStudent };
