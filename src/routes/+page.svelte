<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import {
		CapacitorBarcodeScanner,
		CapacitorBarcodeScannerAndroidScanningLibrary,
		CapacitorBarcodeScannerTypeHint
	} from '@capacitor/barcode-scanner';
	import { Button, Cell, Loading, NavBar, Picker } from 'stdf';
	import { docs } from './api/docs.remote';
	import Textarea from '$lib/components/textarea.svelte';
	import Select from '$lib/components/select.svelte';

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
	let visible = $state(true);

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
>
	{#snippet leftChild()}
		<div></div>
	{/snippet}
</NavBar>

<div class="space-y-6">
	<Button onclick={scanBarcode}>Ler QR Code</Button>
	<div class="space-y-6 p-4">
		{#if loading}
			<div class="mt-4">
				<Loading />
			</div>
		{:else}
			<strong> Resultado </strong>

			<form {...docs} enctype="multipart/form-data">
				<Select
					label="Agenda"
					{...docs.fields.agenda_id.as('select')}
					issues={docs.fields.agenda_id.issues()}
					options={[
						{ value: '1', label: 'Agenda 1' },
						{ value: '2', label: 'Agenda 2' },
						{ value: '3', label: 'Agenda 3' }
					]}
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

				<Button type="submit">Registrar</Button>
			</form>
		{/if}
	</div>
</div>
