<script lang="ts">
	import { cn } from '$lib';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { imask } from '@imask/svelte';
	import { Icon, Eye, EyeSlash } from 'svelte-hero-icons';

	interface Props extends HTMLInputAttributes {
		label?: string;
		issues?: RemoteFormIssue[];
		mask?: 'R$';
		password?: boolean;
	}

	let {
		label,
		issues = [],
		class: className,
		mask,
		type,
		password = false,
		...props
	}: Props = $props();

	let inputType = $state(type);

	const moneyMaskOptions = {
		mask: Number,
		scale: 2,
		thousandsSeparator: '.',
		normalizeZeros: true,
		padFractionalZeros: false
	};
</script>

<div class="space-y-2">
	<label class="space-y-3">
		{#if label}
			<span class="block text-sm font-medium">
				{label}
			</span>
		{/if}

		<div class="input w-full input-primary">
			<input
				{...props}
				use:imask={mask === 'R$' ? moneyMaskOptions : undefined}
				type={password ? inputType : type}
				class={cn('w-full ', className)}
			/>
			{#if password}
				<button
					type="button"
					onclick={() => (inputType = inputType === 'password' ? 'text' : 'password')}
				>
					<Icon src={inputType === 'password' ? Eye : EyeSlash} class="size-5 text-primary" />
				</button>
			{/if}
		</div>
	</label>
	{#each issues as issue}
		<p class="text-sm text-error">{issue.message}</p>
	{/each}
</div>
