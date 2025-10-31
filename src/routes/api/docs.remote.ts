import { form, getRequestEvent, query } from '$app/server';
import { baseURL } from '$lib';
import { docsSchema } from '$lib/schema/docs';
import { error } from '@sveltejs/kit';

export const docs = form(docsSchema, async (docs) => {
	const { locals, fetch } = getRequestEvent();

	const formData = new FormData();

	for (const [key, value] of Object.entries(docs)) {
		formData.append(key, value);
	}
	try {
		const response = await fetch(`${baseURL}/documentos`, {
			headers: {
				Authorization: `Bearer ${locals.token}`
			},
			method: 'POST',
			body: formData
		});

		const result = await response.json();

		// if (result.errors.length) {
		// 	return error(400, JSON.stringify(result.errors));
		// }

		return result;
	} catch (err) {
		return error(400, JSON.stringify(err));
	}
});

export const getAgendas = query(async () => {
	const { locals, fetch } = getRequestEvent();

	const response = await fetch(`${baseURL}/agendas`, {
		headers: {
			Authorization: `Bearer ${locals.token}`
		}
	});
	const data = await response.json();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return data?.data?.data?.agendas.map((v: any) => ({
		value: v.id,
		label: `${v.servico.nome} - ${v.data_inicio.replaceAll('-', '/')} até ${v.data_fim.replaceAll('-', '/')}`,
		group: `${v.cliente.nome}`
	}));
});
