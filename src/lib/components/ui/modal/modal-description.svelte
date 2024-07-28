<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
</script>

{#if $is_desktop}
	<Dialog.Description class="text-base text-gray-1000">
		<slot></slot>
	</Dialog.Description>
{:else}
	<Drawer.Description class="text-base text-gray-1000">
		<slot></slot>
	</Drawer.Description>
{/if}
