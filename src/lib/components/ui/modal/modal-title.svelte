<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
</script>

{#if $is_desktop}
	<Dialog.Title class="text-2xl">
		<slot></slot>
	</Dialog.Title>
{:else}
	<Drawer.Title class="text-2xl">
		<slot></slot>
	</Drawer.Title>
{/if}
