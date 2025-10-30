<script lang="ts">
	import { cn } from '$lib';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	interface Props extends HTMLSelectAttributes {
		label?: string;
		issues?: RemoteFormIssue[];
		options: { value: string; label: string; group: string }[];
	}

	let { label, issues = [], class: className, options, ...props }: Props = $props();
</script>

<div class="space-y-2">
	<label class="space-y-3">
		{#if label}
			<span class="block text-sm font-medium">
				{label}
			</span>
		{/if}

		<select {...props} class={cn('select w-full select-primary', className)}>
			<option disabled selected>Selecione uma agenda</option>

			{#each options as option}
				<optgroup label={option.group}>
					<option value={option.value}>{option.label}</option>
				</optgroup>
			{/each}
		</select>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
