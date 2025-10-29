<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="text-primaryBlack dark:text-primaryWhite">
	{@render children?.()}
</div>
