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
	<Dialog.Description class="text-base text-gray-1000">
		{@render children?.()}
	</Dialog.Description>
{:else}
	<Drawer.Description class="text-base text-gray-1000">
		{@render children?.()}
	</Drawer.Description>
{/if}
