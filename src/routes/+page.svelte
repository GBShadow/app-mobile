<script lang="ts">
	import {
		CapacitorBarcodeScanner,
		CapacitorBarcodeScannerAndroidScanningLibrary,
		CapacitorBarcodeScannerTypeHint
	} from '@capacitor/barcode-scanner';

	import { goto } from '$app/navigation';
	import { Button, Loading, NavBar } from 'stdf';

	type Result = {
		nomeEstabelecimento: string;
		cnpj: string;
		dataEmissao: string;
		numeroNota: string;
		valorTotal: string;
		quantidadeTotal: string;
		itens: {
			descricao: string;
			codigo: string;
			quantidade: string;
			valorUnitario: string;
			valorTotal: string;
		}[];
	};

	let resultData: Result | undefined = $state();
	let loading = $state(false);

	const scanBarcode = async () => {
		loading = true;
		const result = await CapacitorBarcodeScanner.scanBarcode({
			hint: CapacitorBarcodeScannerTypeHint.QR_CODE,
			android: {
				scanningLibrary: CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT
			},
			web: { showCameraSelection: true }
		});

		const params = new URLSearchParams();
		params.append('url', result.ScanResult);
		const response = await fetch(`/api?${params}`, {
			method: 'GET'
		});
		resultData = await response.json();
	};
</script>

<NavBar
	title="App Leitor de Nota"
	titleAlign="center"
	injClass="!dark:text-white font-bold h-16 pt-4"
	left={null}
/>

<div class="space-y-6">
	<Button onclick={scanBarcode}>Ler QR Code</Button>
	<div class="space-y-6 p-4">
		<div class="grid grid-cols-1 place-items-center bg-primary-500 p-4 text-white">
			<strong class="text-white"> Resultado </strong>
			{#if loading}
				<div class="mt-4">
					<Loading />
				</div>
			{:else}
				<strong class="text-center text-lg">{resultData?.nomeEstabelecimento}</strong>
				<strong class="text-center text-lg">
					CNPJ:
					<span class="font-normal">
						{resultData?.cnpj}
					</span>
				</strong>
				<div class="flex gap-4">
					<strong class="grid grid-cols-1">
						Numero da Nota:
						<span class="font-normal">
							{resultData?.numeroNota}
						</span>
					</strong>
					<strong class="grid grid-cols-1">
						Data de Emissão:
						<span class="font-normal">
							{resultData?.dataEmissao}
						</span>
					</strong>
				</div>
				<div class="w-full overflow-x-auto">
					<table class="min-w-full divide-y divide-white">
						<thead class="">
							<tr>
								<th scope="col" class="px-4 py-3.5 text-left text-sm font-normal text-white"
									>Código</th
								>
								<th scope="col" class="px-4 py-3.5 text-left text-sm font-normal text-white"
									>Nome</th
								>
								<th scope="col" class="px-4 py-3.5 text-left text-sm font-normal text-white"
									>Quantidade</th
								>
								<th scope="col" class="px-4 py-3.5 text-left text-sm font-normal text-white"
									>Vl. Uni</th
								>
								<th scope="col" class="px-4 py-3.5 text-left text-sm font-normal text-white"
									>Vl. Total</th
								>
							</tr>
						</thead>
						<tbody class="divide-y divide-white dark:divide-gray-700">
							{#each resultData?.itens as item}
								<tr>
									<td class="px-4 py-4 text-sm whitespace-nowrap">{item.codigo}</td>
									<td class="px-4 py-4 text-sm whitespace-nowrap">{item.descricao}</td>
									<td class="px-4 py-4 text-sm whitespace-nowrap">{item.quantidade}</td>
									<td class="px-4 py-4 text-sm whitespace-nowrap">{item.valorUnitario}</td>
									<td class="px-4 py-4 text-sm whitespace-nowrap">{item.valorTotal}</td>
								</tr>
							{/each}
							<tr>
								<td colspan="5" align="right" class="px-4 py-4 text-sm whitespace-nowrap"
									><strong> Valor Total: </strong>
									{resultData?.valorTotal}</td
								>
							</tr>
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</div>
</div>
