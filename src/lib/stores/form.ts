import { writable } from 'svelte/store';

import { browser } from '$app/environment';

const defaultValue = {
	name: '',
	school_name: '',
	teacher_prefix: '',
	teacher_firstname: '',
	teacher_lastname: '',
	teacher_phone: '',
	teacher_email: '',
	teacher_contact: '',
	teacher_address: '',
	teacher_address_detail: {
		sub_district: '',
		district: '',
		province: '',
		zipcode: ''
	},
	teacher_disease: '',
	teacher_drug: '',
	teacher_allergies: '',
	teacher_citizen_card: '',
	teacher_verify: '',
	consent: '',
	students: [
		{
			name_prefix: '',
			firstname: '',
			lastname: '',
			nickname: '',
			date_of_birth: '',
			nationality: '',
			race: '',
			religion: '',
			level: '',
			address: '',
			address_detail: {
				sub_district: '',
				district: '',
				province: '',
				zipcode: ''
			},
			email: '',
			phone: '',
			contact: '',
			disease: '',
			drug: '',
			allergies: '',
			image: '',
			citizen_card: '',
			student_card: '',
			student_certificate: ''
		},
		{
			name_prefix: '',
			firstname: '',
			lastname: '',
			nickname: '',
			date_of_birth: '',
			nationality: '',
			race: '',
			religion: '',
			level: '',
			address: '',
			sub_district: '',
			district: '',
			province: '',
			zipcode: '',
			email: '',
			phone: '',
			contact: '',
			disease: '',
			drug: '',
			allergies: '',
			image: '',
			citizen_card: '',
			student_card: '',
			student_certificate: ''
		},
		{
			name_prefix: '',
			firstname: '',
			lastname: '',
			nickname: '',
			date_of_birth: '',
			nationality: '',
			race: '',
			religion: '',
			level: '',
			address: '',
			sub_district: '',
			district: '',
			province: '',
			zipcode: '',
			email: '',
			phone: '',
			contact: '',
			disease: '',
			drug: '',
			allergies: '',
			image: '',
			citizen_card: '',
			student_card: '',
			student_certificate: ''
		}
	]
};

const stored =
	browser && window.localStorage.form && window.localStorage.form.length > 2
		? JSON.parse(window.localStorage.form)
		: null;

const formContent = writable(stored || defaultValue);

export { formContent };
