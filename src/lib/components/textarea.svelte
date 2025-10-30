<script lang="ts">
	import { cn } from '$lib';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	interface Props extends HTMLTextareaAttributes {
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

		<textarea {...props} class={cn('textarea w-full textarea-primary', className)}></textarea>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
