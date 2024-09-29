<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';

	interface Props {
		open?: boolean;
		children?: import('svelte').Snippet;
	}

	let { open = $bindable(false), children }: Props = $props();
</script>

{#if $is_desktop}
	<Dialog.Root bind:open>
		{@render children?.()}
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		{@render children?.()}
	</Drawer.Root>
{/if}
