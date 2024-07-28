<script lang="ts">
	import { is_desktop } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
</script>

{#if $is_desktop}
	<Dialog.Trigger asChild let:builder>
		<slot {builder}></slot>
	</Dialog.Trigger>
{:else}
	<Drawer.Trigger asChild let:builder>
		<slot {builder}></slot>
	</Drawer.Trigger>
{/if}
