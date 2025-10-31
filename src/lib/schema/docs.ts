import z from 'zod';

export const docsSchema = z.object({
	valor: z.string().nonempty(),
	data: z.string(),
	forma_pagamento: z.string().nonempty(),
	tipo_comprovante: z.string().default('transporte_logistica'),
	agenda_id: z.string().nonempty(),
	descricao: z.string().nonempty(),
	arquivo: z.file()
});
