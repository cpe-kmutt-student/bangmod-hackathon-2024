import type { Student, Team } from '$lib/server/database';

interface TeamData extends Team {
	students: Student[];
}

interface StudentFile {
	image: File | null;
	citizen_card: File | null;
	student_card: File | null;
	student_certificate: File | null;
}

interface TeamFile {
	teacher_citizen_card: File | null;
	teacher_verify: File | null;
	students: StudentFile[];
}

const formSerializer = (formData: FormData) => {
	const files: TeamFile = {
		teacher_citizen_card: formData.get('teacher_citizen_card') as File | null,
		teacher_verify: formData.get('teacher_citizen_card') as File | null,
		students: []
	};

	const data: TeamData = {
		name: (formData.get('name') || '') as string,
		school_name: (formData.get('school_name') || '') as string,
		teacher_prefix: (formData.get('teacher_prefix') || '') as string,
		teacher_firstname: (formData.get('teacher_firstname') || '') as string,
		teacher_lastname: (formData.get('teacher_lastname') || '') as string,
		teacher_phone: (formData.get('teacher_phone') || '') as string,
		teacher_email: (formData.get('teacher_email') || '') as string,
		teacher_contact: (formData.get('teacher_line') || '') as string,
		teacher_address: (formData.get('teacher_address') || '') as string,
		teacher_sub_district: (formData.get('teacher_sub_district') || '') as string,
		teacher_district: (formData.get('teacher_district') || '') as string,
		teacher_province: (formData.get('teacher_province') || '') as string,
		teacher_zipcode: (formData.get('teacher_zipcode') || '') as string,
		teacher_allergies: (formData.get('teacher_allergies') || '') as string,
		teacher_drug: (formData.get('teacher_drug') || '') as string,
		teacher_disease: (formData.get('teacher_disease') || '') as string,
		teacher_citizen_card: files.teacher_citizen_card?.name || '',
		teacher_verify: files.teacher_verify?.name || '',
		consent: true,
		students: []
	};

	for (let i = 0; i < 3; i++) {
		if (!formData.get(`students[${i}][firstname]`)) {
			break;
		}

		const studentFiles: StudentFile = {
			image: formData.get(`students[${i}][image]`) as File | null,
			citizen_card: formData.get(`students[${i}][citizen_card]`) as File | null,
			student_card: formData.get(`students[${i}][student_card]`) as File | null,
			student_certificate: formData.get(`students[${i}][student_certificate]`) as File | null
		};
		files.students.push(studentFiles);

		const studentData: Student = {
			team_id: '',
			name_prefix: (formData.get(`students[${i}][name_prefix]`) || '') as string,
			firstname: (formData.get(`students[${i}][firstname]`) || '') as string,
			lastname: (formData.get(`students[${i}][lastname]`) || '') as string,
			nickname: (formData.get(`students[${i}][nickname]`) || '') as string,
			date_of_birth: new Date(
				(formData.get(`students[${i}][date_of_birth]`) || '2000-01-01') as string
			),
			nationality: (formData.get(`students[${i}][nationality]`) || '') as string,
			race: (formData.get(`students[${i}][race]`) || '') as string,
			religion: (formData.get(`students[${i}][religion]`) || '') as string,
			level: 'year 10',
			address: (formData.get(`students[${i}][address]`) || '') as string,
			sub_district: (formData.get(`students[${i}][sub_district]`) || '') as string,
			district: (formData.get(`students[${i}][district]`) || '') as string,
			province: (formData.get(`students[${i}][province]`) || '') as string,
			zipcode: (formData.get(`students[${i}][zipcode]`) || '') as string,
			email: (formData.get(`students[${i}][email]`) || '') as string,
			phone: (formData.get(`students[${i}][phone]`) || '') as string,
			contact: (formData.get(`students[${i}][line]`) || '') as string,
			disease: (formData.get(`students[${i}][disease]`) || '') as string,
			drug: (formData.get(`students[${i}][drug]`) || '') as string,
			allergies: (formData.get(`students[${i}][allergies]`) || '') as string,
			image: studentFiles.image?.name || '',
			citizen_card: studentFiles.citizen_card?.name || '',
			student_card: studentFiles.student_card?.name || '',
			student_certificate: studentFiles.student_certificate?.name || ''
		};
		data.students.push(studentData);
	}
	return { data, files };
};

export { formSerializer };
export type { TeamData, TeamFile, StudentFile };
