import { redirect, type Handle } from '@sveltejs/kit';

const PUBLIC_PATHS = ['/login', '/usuario/criar'];

export const handle: Handle = async ({ event, resolve }) => {
	const isPublic = PUBLIC_PATHS.some((path) => event.url.pathname.startsWith(path));

	const token = event.cookies.get('svelte_app_token');
	const user = event.cookies.get('svelte_app_user');

	if (token && user) {
		event.locals.token = token;
		event.locals.user = JSON.parse(user);
	}

	if (!token && !isPublic) {
		throw redirect(303, '/login');
	}

	if (token && isPublic) {
		throw redirect(303, '/');
	}

	return resolve(event);

	// return svelteKitHandler({
	// 	event,
	// 	resolve,
	// 	auth,
	// 	building
	// });
};
