<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';

	export let open = false;
</script>

{#if $is_desktop}
	<Dialog.Root bind:open>
		<slot></slot>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<slot></slot>
	</Drawer.Root>
{/if}
