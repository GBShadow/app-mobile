import { json } from '@sveltejs/kit';
import * as cheerio from 'cheerio';

export async function GET({ url }) {
	try {
		const urlParams = url.searchParams.get('url');
		const response = await fetch(urlParams!);
		const html = await response.text();
		const $ = cheerio.load(html);

		// 🏪 Nome e CNPJ do estabelecimento
		const nomeEstabelecimento = $('#u20').first().text().trim();
		const cnpj =
			$('div:contains("CNPJ:")')
				.text()
				.match(/\d{14}/)?.[0] || null;

		// 📅 Data de emissão
		const dataEmissao =
			$('li:contains("Emissão:")')
				.text()
				.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || null;

		// 🧾 Número da nota
		const numeroNota = $('li:contains("Número:")').text().match(/\d+/)?.[0] || null;

		// 💰 Valor total
		const valorTotal =
			$('.linhaShade')
				.text()
				.match(/[\d.,]+/)?.[0] || null;

		const quantidadeTotal = $('div:contains("itens:")').text().match(/\d+/)?.[0] || null;

		// 🧺 Itens da nota
		const itens: {
			descricao: string;
			codigo?: string;
			quantidade?: string;
			valorUnitario?: string;
			valorTotal?: string;
		}[] = [];

		$('table tbody tr').each((_, el) => {
			const tds = $(el).find('td');
			if (tds.length >= 2) {
				const spans1 = $(tds[0]).find('span');
				const spans2 = $(tds[1]).find('span');

				const descricao = $(spans1[0]).text().trim();
				const codigo = $(spans1[1]).text().trim().match(/\d+/)?.[0];
				const quantidade = $(spans1[2])
					.text()
					.trim()
					.match(/[\d,]+/)?.[0];
				const valorUnitario = $(spans1[4])
					.text()
					.trim()
					.match(/[\d,]+/)?.[0];
				const valorTotal = $(spans2[0])
					.text()
					.trim()
					.match(/[\d,]+/)?.[0];
				itens.push({
					descricao,
					codigo,
					quantidade,
					valorUnitario,
					valorTotal
				});
			}
		});

		return json({
			data: {
				nomeEstabelecimento,
				cnpj,
				dataEmissao: dataEmissao?.split('/').reverse().join('-'),
				numeroNota,
				valorTotal,
				quantidadeTotal,
				itens
			},
			error: null
		});
	} catch (error) {
		return json({ error, data: null });
	}
}
