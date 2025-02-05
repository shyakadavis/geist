<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import type { Snippet } from 'svelte';
	import { is_desktop } from '.';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

{#if is_desktop.current}
	<Dialog.Title class="text-2xl">
		{@render children?.()}
	</Dialog.Title>
{:else}
	<Drawer.Title class="text-2xl">
		{@render children?.()}
	</Drawer.Title>
{/if}
