import { z } from 'zod';

const dateSchema = z
	.string()
	.refine(
		(value) => {
			const datePattern = /(\d{2})\/(\d{2})\/(\d{4})$/;

			if (!datePattern.test(value)) {
				return false;
			}

			const [day, month, year] = value.split('/').map((part) => parseInt(part));
			const date = new Date(year, month - 1, day);

			return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
		},
		{
			message: 'Invalid date format or out-of-range values'
		}
	)
	.transform((value) => {
		const [day, month, year] = value.split('/').map((part) => parseInt(part));
		const date = new Date(year, month - 1, day);
		return date.toISOString();
	});

const StudentSchema = z.object({
	name_prefix: z.string().min(1),
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	nickname: z.string().min(1),
	date_of_birth: dateSchema,
	nationality: z.string().min(1),
	race: z.string().min(1),
	religion: z.string().min(1),
	level: z.string().min(1),
	address: z.string().min(1),
	sub_district: z.string().min(1),
	district: z.string().min(1),
	province: z.string().min(1),
	zipcode: z.string().min(1),
	email: z.string().email(),
	phone: z.string().min(9),
	contact: z.string().min(1),
	disease: z.string(),
	drug: z.string(),
	allergies: z.string(),
	image: z.string().min(1),
	citizen_card: z.string().min(1),
	student_card: z.string().min(1),
	student_certificate: z.string().min(1)
});

const MAX_FILE_SIZE = 5242880;

const StudentFileSchema = z.object({
	image: z
		.instanceof(File)
		.refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
		.refine(
			(file) =>
				file?.type === 'application/pdf',
			'Only .pdf formats are supported.'
		),
	citizen_card: z
		.instanceof(File)
		.refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
		.refine(
			(file) =>
				file?.type === 'application/pdf',
			'Only .pdf formats are supported.'
		),
	student_card: z
		.instanceof(File)
		.refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
		.refine(
			(file) =>
				file?.type === 'application/pdf',
			'Only .pdf formats are supported.'
		),
	student_certificate: z
		.instanceof(File)
		.refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
		.refine(
			(file) =>
				file?.type === 'application/pdf',
			'Only .pdf formats are supported.'
		)
});

const TeamSchema = z.object({
	name: z.string().min(1),
	school_name: z.string().min(1),
	teacher_prefix: z.string().min(1),
	teacher_firstname: z.string().min(1),
	teacher_lastname: z.string().min(1),
	teacher_phone: z.string().min(1),
	teacher_email: z.string().email(),
	teacher_contact: z.string().min(1),
	teacher_address: z.string().min(1),
	teacher_sub_district: z.string().min(1),
	teacher_district: z.string().min(1),
	teacher_province: z.string().min(1),
	teacher_zipcode: z.string().min(1),
	teacher_disease: z.string(),
	teacher_drug: z.string(),
	teacher_allergies: z.string(),
	teacher_citizen_card: z.string().min(1),
	teacher_verify: z.string().min(1),
	consent: z.boolean(),
	students: z.array(StudentSchema).min(2).max(3)
});

const TeamFileSchema = z.object({
	teacher_citizen_card: z
		.instanceof(File)
		.refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
		.refine(
			(file) => file?.type === 'application/pdf',
			'Only .pdf formats are supported.'
		),
	teacher_verify: z
		.instanceof(File)
		.refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
		.refine(
			(file) =>
				file?.type === 'application/pdf',
			'Only .pdf formats are supported.'
		),
	students: z.array(StudentFileSchema).min(2).max(3)
});

type Student = z.infer<typeof StudentSchema> & {
	team_id: string;
};

type Team = Omit<z.infer<typeof TeamSchema>, 'students'> & {
	__superform_id?: string;
	id?: string;
	students: Student[];
};

type StudentFile = {
	image: File;
	citizen_card: File;
	student_card: File;
	student_certificate: File;
};

type TeamFile = {
	teacher_citizen_card: File;
	teacher_verify: File;
	students: StudentFile[];
};

export { StudentSchema, TeamSchema, StudentFileSchema, TeamFileSchema };
export type { Student, Team, StudentFile, TeamFile };
