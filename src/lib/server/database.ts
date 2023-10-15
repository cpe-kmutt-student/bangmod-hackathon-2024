import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	idle_timeout: 20,
	max_lifetime: 60 * 15
});

interface Team {
	name: string;
	school_name: string;
	teacher_prefix: string;
	teacher_firstname: string;
	teacher_lastname: string;
	teacher_phone: string;
	teacher_email: string;
	teacher_contact: string;
	teacher_address: string;
	teacher_sub_district: string;
	teacher_district: string;
	teacher_province: string;
	teacher_zipcode: string;
	teacher_citizen_card: string;
	teacher_verify: string;
	teacher_disease: string;
	teacher_drug: string;
	teacher_allergies: string;
	consent: boolean;
}

const insertTeam = (team: Team) => {
	const insertKeys: (keyof Team)[] = [
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

interface Student {
	team_id: string;
	name_prefix: string;
	firstname: string;
	lastname: string;
	nickname: string;
	date_of_birth: Date;
	nationality: string;
	race: string;
	religion: string;
	level: 'year 10' | 'year 11' | 'year 12'; // education_level equivalent
	address: string;
	sub_district: string;
	district: string;
	province: string;
	zipcode: string;
	email: string;
	phone: string;
	contact: string;
	image: string;
	citizen_card: string; // File path
	student_card: string; // File path
	student_certificate: string; // File path
	disease: string; // Medical condition
	drug: string; // Allergic drug
	allergies: string; // Allergic food
}

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

export type { Team, Student };
