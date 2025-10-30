import z from 'zod';

export const docsSchema = z.object({
	valor: z.string().nonempty(),
	data: z.string(),
	agenda_id: z.string().nonempty(),
	descricao: z.string().nonempty(),
	arquivo: z.file()
});
