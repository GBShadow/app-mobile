import { svelteKitHandler } from 'better-auth/svelte-kit';
import { auth } from '$lib/server/auth';
import { building } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

const PUBLIC_PATHS = ['/login', '/usuario/criar'];

export const handle: Handle = async ({ event, resolve }) => {
	const isPublic = PUBLIC_PATHS.some((path) => event.url.pathname.startsWith(path));
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}

	if (!session && !isPublic) {
		throw redirect(303, '/login');
	}

	if (session && isPublic) {
		throw redirect(303, '/');
	}

	const response = svelteKitHandler({
		event,
		resolve: async () => {
			return resolve(event);
		},
		auth,
		building
	});
	return response;
};
