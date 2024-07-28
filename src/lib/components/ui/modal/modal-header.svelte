<script lang="ts">
	import { cn } from '$lib/utils';
	import { is_desktop, is_overflowing, is_single_button } from '.';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
</script>

{#if $is_desktop}
	<Dialog.Header
		class={cn('sticky top-0 px-6 pt-6', {
			'border-b bg-background-100 pb-3 pt-3': $is_overflowing || $is_single_button
		})}
	>
		<slot></slot>
	</Dialog.Header>
{:else}
	<Drawer.Header class="text-left">
		<slot></slot>
	</Drawer.Header>
{/if}
