import { form } from '$app/server';
import { docsSchema } from '$lib/schema/docs';

export const docs = form(docsSchema, async (docs) => {
	// const { request } = getRequestEvent();

	const result = docs;

	return result;
});
