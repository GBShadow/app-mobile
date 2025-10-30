<script lang="ts">
	import { cn } from '$lib';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	interface Props extends HTMLSelectAttributes {
		label?: string;
		issues?: RemoteFormIssue[];
		options: { value: string; label: string; group?: string }[];
	}

	let { label, issues = [], class: className, options = [], ...props }: Props = $props();
	let groups = $derived.by(() => {
		const g = Object.groupBy(options, (v) => v.group!);

		return Object.entries(g);
	});

	let { groups: gr2, hasGroup } = $derived.by(() => {
		const hasGroup = options.every((v) => v.group);
		const g = Object.groupBy(options, (v) => v.group!);

		return {
			groups: Object.entries(g),
			hasGroup
		};
	});
</script>

<div class="space-y-2">
	<label class="space-y-3">
		{#if label}
			<span class="block text-sm font-medium">
				{label}
			</span>
		{/if}

		<select {...props} class={cn('select w-full select-primary', className)}>
			<option disabled selected>Selecione uma opção...</option>

			{#if hasGroup}
				{#each groups as group}
					<optgroup label={group[0]}>
						{#each group[1] as option}
							<option value={option.value}>{option.label}</option>
						{/each}
					</optgroup>
				{/each}
			{:else}
				{#each options as option}
					<option value={option.value}>{option.label}</option>
				{/each}
			{/if}
		</select>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
