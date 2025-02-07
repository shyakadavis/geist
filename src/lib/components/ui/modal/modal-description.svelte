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
	<Dialog.Description class="text-base text-gray-1000">
		{@render children?.()}
	</Dialog.Description>
{:else}
	<Drawer.Description class="text-base text-gray-1000">
		{@render children?.()}
	</Drawer.Description>
{/if}
