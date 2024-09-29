<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
	interface Props {
		children?: import('svelte').Snippet<[any]>;
	}

	let { children }: Props = $props();
</script>

{#if $is_desktop}
	<Dialog.Trigger asChild let:builder>
		{@render children?.({ builder, })}
	</Dialog.Trigger>
{:else}
	<Drawer.Trigger asChild let:builder>
		{@render children?.({ builder, })}
	</Drawer.Trigger>
{/if}
