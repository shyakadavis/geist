<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{#if $is_desktop}
	<Dialog.Title class="text-2xl">
		{@render children?.()}
	</Dialog.Title>
{:else}
	<Drawer.Title class="text-2xl">
		{@render children?.()}
	</Drawer.Title>
{/if}
