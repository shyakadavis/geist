<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import type { Snippet } from 'svelte';
	import { is_desktop } from '.';

	type Props = {
		open?: boolean;
		children?: Snippet;
	};

	let { open = $bindable(false), children }: Props = $props();
</script>

{#if is_desktop.current}
	<Dialog.Root bind:open>
		{@render children?.()}
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		{@render children?.()}
	</Drawer.Root>
{/if}
