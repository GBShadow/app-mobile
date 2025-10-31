<script lang="ts">
	import { getToastState } from '$lib/toast-state.svelte';
	import Toast from './toast.svelte';

	const toastState = getToastState();
</script>

<div class="toast toast-end toast-top z-9999">
	{#each toastState.toasts as toast}
		<Toast {toast} />
	{/each}
</div>
