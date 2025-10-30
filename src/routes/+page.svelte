<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import {
		CapacitorBarcodeScanner,
		CapacitorBarcodeScannerAndroidScanningLibrary,
		CapacitorBarcodeScannerTypeHint
	} from '@capacitor/barcode-scanner';
	import { docs, getAgendas } from './api/docs.remote';
	import Textarea from '$lib/components/textarea.svelte';
	import Select from '$lib/components/select.svelte';
	import { signout } from './api/auth.remote';

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
	let { data } = $props();

	$inspect(data.agendas);
</script>

<div class="flex items-center justify-between p-4 shadow-md">
	<strong>App Leitor de Nota</strong>
	<form {...signout}>
		<button type="submit" class="btn btn-soft btn-error">Logout</button>
	</form>
</div>
<div class="space-y-6">
	<div class="space-y-6 p-4">
		<button class="btn w-full btn-outline btn-primary" onclick={scanBarcode}>Ler QR Code</button>
		{#if loading}
			<span class="loading loading-md loading-spinner"></span>
		{:else}
			<form {...docs} enctype="multipart/form-data" class="space-y-4">
				<Select
					label="Agenda"
					{...docs.fields.agenda_id.as('select')}
					issues={docs.fields.agenda_id.issues()}
					options={data.agendas}
				/>
				<Input
					label="Data"
					{...docs.fields.data.as('date')}
					issues={docs.fields.data.issues()}
					defaultValue={resultData?.dataEmissao}
				/>
				<Input
					label="Valor"
					{...docs.fields.valor.as('text')}
					issues={docs.fields.valor.issues()}
					defaultValue={resultData?.valorTotal}
				/>
				<Textarea
					label="Descrição"
					{...docs.fields.descricao.as('text')}
					issues={docs.fields.descricao.issues()}
				/>
				<Input
					label="Arquivo"
					{...docs.fields.arquivo.as('file')}
					issues={docs.fields.arquivo.issues()}
				/>

				<button class="btn w-full btn-primary" type="submit">Registrar</button>
			</form>
		{/if}
	</div>
</div>
