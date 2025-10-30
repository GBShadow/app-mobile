import { redirect } from '@sveltejs/kit';
import { form, getRequestEvent, query } from '$app/server';
// import { auth } from '$lib/server/auth';
import { signupSchema, loginSchema } from '$lib/schema/auth';

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(() => resolve(null), ms));
}

export const signup = form(signupSchema, async () => {
	await delay(2000);
	// await auth.api.signUpEmail({ body: user });
	redirect(307, `/login`);
});

export const login = form(loginSchema, async (user) => {
	const { fetch, cookies } = getRequestEvent();

	const response = await fetch(
		'https://homolog.txaicon.txaidesenvolvimento.com.br/api/v2/auth/login',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}
	);

	const { data } = await response.json();

	cookies.set('svelte_app_token', data.data.token, {
		path: '/',
		maxAge: 60 * 60 * 8 // 8 hours
	});
	cookies.set('svelte_app_user', JSON.stringify(data.data.user), {
		path: '/',
		maxAge: 60 * 60 * 8 // 8 hours
	});

	redirect(303, '/');
});

export const signout = form(async () => {
	const { cookies, locals } = getRequestEvent();

	locals.token = null;
	locals.user = null;

	cookies.delete('svelte_app_token', {
		path: '/'
	});
	cookies.delete('svelte_app_user', {
		path: '/'
	});

	redirect(303, '/login');
});

export const getUser = query(async () => {
	const { locals } = getRequestEvent();
	if (!locals.user) {
		redirect(307, '/login');
	}
	return locals.user;
});
