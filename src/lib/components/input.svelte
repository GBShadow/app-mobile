<script lang="ts">
	import { cn } from '$lib';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		label?: string;
		issues?: RemoteFormIssue[];
	}

	let { label, issues = [], class: className, type, ...props }: Props = $props();
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
			{type}
			class={cn(
				'w-full',
				type === 'file' ? 'file-input file-input-primary' : 'input input-primary',
				className
			)}
		/>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
