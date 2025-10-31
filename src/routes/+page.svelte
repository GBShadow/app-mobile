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
	import { getToastState } from '$lib/toast-state.svelte';

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
	let { data } = $props();
	const toastState = getToastState();

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
		const { error, data } = await response.json();
		if (data) {
			resultData = data;
			docs.fields.valor.set(resultData?.valorTotal!);
			docs.fields.data.set(resultData?.dataEmissao!);
			toastState.add({
				title: 'Info.',
				message: 'Leitura do QR Code realizada!',
				variant: 'alert-info'
			});
		}

		if (error) {
			toastState.add({ title: 'Erro!', message: 'Erro ao ler QR Code!', variant: 'alert-error' });
			console.log(error);
		}

		loading = false;
	};
</script>

<div class="flex items-center justify-between p-4 pt-10 shadow-md">
	<strong>App Leitor de Nota</strong>
	<form {...signout}>
		<button type="submit" class="btn btn-soft btn-error">Logout</button>
	</form>
</div>
<div class="space-y-6">
	<div class="space-y-6 p-4 pt-10">
		<button class="btn w-full btn-outline btn-primary" onclick={scanBarcode}>Ler QR Code</button>
		{#if loading}
			<div class="grid w-full grid-cols-1 place-items-center">
				<span class="loading loading-md loading-spinner text-primary"></span>
			</div>
		{:else}
			<form
				{...docs.enhance(async ({ submit, form }) => {
					try {
						await submit();
						toastState.add({
							title: 'Sucesso!',
							message: 'Nota cadastrada!',
							variant: 'alert-success'
						});
						form.reset();
					} catch {
						toastState.add({
							title: 'Erro!',
							message: 'Erro ao cadastrar nota!',
							variant: 'alert-error'
						});
					}
				})}
				enctype="multipart/form-data"
				class="space-y-4"
			>
				<Select
					label="Agenda"
					{...docs.fields.agenda_id.as('select')}
					issues={docs.fields.agenda_id.issues()}
					options={data.agendas}
				/>
				<Select
					label="Forma de Pagamento"
					{...docs.fields.forma_pagamento.as('select')}
					issues={docs.fields.forma_pagamento.issues()}
					options={[
						{ label: 'Adiantamento', value: 'adiantamento' },
						{ label: 'Cartão Corporativo', value: 'cartao_corporativo' },
						{ label: 'Recurso Próprio', value: 'recurso_proprio' }
					]}
				/>
				<Select
					label="Tipo de Pagamento"
					{...docs.fields.tipo_comprovante.as('select')}
					issues={docs.fields.tipo_comprovante.issues()}
					options={[
						{ label: 'Despesas com Alimentação', value: 'alimentacao' },
						{ label: 'Despesas com Transporte e Logística', value: 'transporte_logistica' },
						{ label: 'Despesas Gerais', value: 'despesas' },
						{ label: 'Despesas Txai', value: 'despesas_txai' },
						{ label: 'Outros', value: 'null' }
					]}
				/>
				<Input label="Data" {...docs.fields.data.as('date')} issues={docs.fields.data.issues()} />
				<Input
					label="Valor"
					{...docs.fields.valor.as('text')}
					issues={docs.fields.valor.issues()}
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

				<button disabled={!!docs.pending} class="btn w-full btn-primary" type="submit">
					{#if docs.pending}
						<span class="loading loading-lg loading-spinner"></span>
					{:else}
						Salvar
					{/if}
				</button>
			</form>
		{/if}
	</div>
</div>
