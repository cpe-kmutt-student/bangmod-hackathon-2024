import { redirect } from '@sveltejs/kit';

import type { PageLoad } from './$types';

import { PUBLIC_CLOSING_DATE } from '$env/static/public';

export const load: PageLoad = () => {
	const currentDate = new Date();
	const deadline = new Date(PUBLIC_CLOSING_DATE);
	if (currentDate >= deadline) {
		throw redirect(302, '/');
	}
	return {};
};
