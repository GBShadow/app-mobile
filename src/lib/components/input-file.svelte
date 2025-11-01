<script lang="ts">
	import { cn } from '$lib';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { imask } from '@imask/svelte';
	interface Props extends HTMLInputAttributes {
		label?: string;
		issues?: RemoteFormIssue[];
	}

	let { label, issues = [], class: className, ...props }: Props = $props();
</script>

<div class="space-y-2">
	<label class="space-y-3">
		{#if label}
			<span class="block text-sm font-medium">
				{label}
			</span>
		{/if}

		<input
			{...props}
			type="file"
			class={cn('w-full', 'file-input file-input-primary', className)}
		/>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
