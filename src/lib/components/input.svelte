<script lang="ts">
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		label?: string;
		issues?: RemoteFormIssue[];
	}

	let { value = $bindable(), label, issues = [], ...props }: Props = $props();
</script>

<div class="space-y-1">
	<label class="relative mt-2 block">
		{#if label}
			<span class="text-sm font-medium text-text dark:text-primaryWhite">
				{label}
			</span>
		{/if}

		<input
			{...props}
			class="mt-0.5 w-full rounded bg-primary-700/40 px-4 py-2 text-text shadow-sm outline-0 transition-all focus:bg-transparent focus:ring focus:ring-primary-500 sm:text-sm dark:text-primaryWhite"
		/>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
