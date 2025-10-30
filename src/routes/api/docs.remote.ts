import { form, getRequestEvent, query } from '$app/server';
import { docsSchema } from '$lib/schema/docs';

export const docs = form(docsSchema, async (docs) => {
	// const { request } = getRequestEvent();

	const result = docs;

	return result;
});

export const getAgendas = query(async () => {
	const { locals, fetch } = getRequestEvent();

	const response = await fetch(
		'https://homolog.txaicon.txaidesenvolvimento.com.br/api/v2/agendas',
		{
			headers: {
				Authorization: `Bearer ${locals.token}`
			}
		}
	);
	const data = await response.json();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return data?.data?.data?.agendas.map((v: any) => ({
		value: v.id,
		label: `${v.servico.nome} - ${v.data_inicio.replaceAll('-', '/')} até ${v.data_fim.replaceAll('-', '/')}`,
		group: `${v.cliente.nome}`
	}));
});
