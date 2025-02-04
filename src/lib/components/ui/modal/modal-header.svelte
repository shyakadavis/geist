<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { is_desktop, is_overflowing, is_single_button } from '.';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

{#if is_desktop.current}
	<Dialog.Header
		class={cn('sticky top-0 px-6 pt-6', {
			'border-b bg-background-100 pb-3 pt-3': $is_overflowing || $is_single_button
		})}
	>
		{@render children?.()}
	</Dialog.Header>
{:else}
	<Drawer.Header class="text-left">
		{@render children?.()}
	</Drawer.Header>
{/if}
