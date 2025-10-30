import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAgendas } from './api/docs.remote';

export const load = (async ({ locals }) => {
	if (!locals.user) {
		redirect(303, '/login');
	}

	const agendas = await getAgendas();

	return {
		user: locals.user,
		agendas
	};
}) satisfies PageServerLoad;
