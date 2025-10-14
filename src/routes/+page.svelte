<script lang="ts">
	import {
		CapacitorBarcodeScanner,
		CapacitorBarcodeScannerAndroidScanningLibrary,
		CapacitorBarcodeScannerTypeHint
	} from '@capacitor/barcode-scanner';

	import { Button } from 'stdf';

	let resultScanner = $state();
	let result = $state();
	const scanBarcode = async () => {
		const result = await CapacitorBarcodeScanner.scanBarcode({
			hint: CapacitorBarcodeScannerTypeHint.QR_CODE,
			android: {
				scanningLibrary: CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT
			},
			web: { showCameraSelection: true }
		});
		resultScanner = result.ScanResult;
	};

	const apiHandler = async () => {
		try {
			const res = await fetch('/api');
			const data = await res.json();
			result = JSON.stringify({ data, message: 'Success' }, null, 2);
		} catch (error) {
			result = JSON.stringify({ error, message: 'error' }, null, 2);
		}
	};

	const apiHandler2 = async () => {
		try {
			const res = await fetch('https://fake.jsonmockapi.com/products?length=10');
			const data = await res.json();
			result = JSON.stringify({ data, message: 'Success' }, null, 2);
		} catch (error) {
			result = JSON.stringify({ error, message: 'error' }, null, 2);
		}
	};
</script>

<div class="p-4">
	<Button onclick={scanBarcode}>Ler QR Code</Button>
	<Button onclick={apiHandler}>API Handler</Button>
	<Button onclick={apiHandler2}>API Handler 2</Button>
	<div class="grid grid-cols-1 place-items-center bg-primary-500 p-8">
		<strong class="text-white">
			{#if result}
				{result}
			{:else}
				Sem resultado
			{/if}
		</strong>
	</div>
</div>
