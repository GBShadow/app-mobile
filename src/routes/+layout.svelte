<script lang="ts">
	import '../app.css';
	import { setToastState } from '$lib/toast-state.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Toaster from '$lib/components/toaster.svelte';

	let { children } = $props();

	setToastState();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />
{@render children?.()}
