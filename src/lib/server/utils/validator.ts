import { z, type ZodFormattedError } from 'zod';

const StudentSchema = z.object({
	name_prefix: z.string().min(1),
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	nickname: z.string().min(1),
	date_of_birth: z.date(),
	nationality: z.string().min(1),
	race: z.string().min(1),
	religion: z.string().min(1),
	level: z.enum(['year 10', 'year 11', 'year 12']),
	address: z.string().min(1),
	sub_district: z.string().min(1),
	district: z.string().min(1),
	province: z.string().min(1),
	zipcode: z.string().min(1),
	email: z.string().email(),
	phone: z.string().min(1),
	contact: z.string().min(1),
	image: z.string().min(1),
	citizen_card: z.string().min(1),
	student_card: z.string().min(1),
	student_certificate: z.string().min(1),
	disease: z.string(),
	drug: z.string(),
	allergies: z.string()
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
	teacher_citizen_card: z.string().min(1),
	teacher_verify: z.string().min(1),
	teacher_disease: z.string(),
	teacher_drug: z.string(),
	teacher_allergies: z.string(),
	consent: z.boolean(),
	students: z.array(StudentSchema)
});

const FlattenError = (formattedError: ZodFormattedError<unknown>) => {
	const output: Record<string, unknown> = {};
	const entries = Object.entries(formattedError).filter(([key]) => key !== '_errors');

	if ('_errors' in formattedError && formattedError._errors.length) {
		return formattedError._errors;
	}

	for (const [key, value] of entries) {
		output[key] = FlattenError(value as unknown as ZodFormattedError<unknown>);
	}

	return output;
};

export { StudentSchema, TeamSchema, FlattenError };
