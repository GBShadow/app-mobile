<script lang="ts">
	import type { Toast } from '$lib/types';
	import { getToastState } from '$lib/toast-state.svelte';
	import { cn } from '$lib';

	type Props = {
		toast: Toast;
	};

	let { toast }: Props = $props();
	const toastState = getToastState();
</script>

<div class={cn('relative alert flex w-48 flex-col items-start gap-2 text-base-100', toast.variant)}>
	<span class="font-medium">{toast.title}</span>
	<span class="text-sm">{toast.message}</span>
	<button class="absolute top-2 right-2 size-5" onclick={() => toastState.remove(toast.id)}>
		<span class="sr-only">Close toast</span>
		<span class="text-sm">X</span>
	</button>
</div>
