<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { cn } from '$lib/utils';
	import { type Snippet } from 'svelte';
	import { is_desktop, is_overflowing } from '.';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();

	let ref: HTMLDivElement | null = $state(null);

	function check_overflow(element: HTMLDivElement) {
		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}

	$effect(() => {
		if (ref) {
			const overflow = check_overflow(ref);
			is_overflowing.set(overflow);
		}
	});
</script>

{#if is_desktop.matches}
	<Dialog.Content
		bind:ref
		class={cn(
			'max-h-[80vh] overflow-y-auto bg-background-100 p-0 dark:bg-background-200 sm:rounded-xl',
			// open animation
			'data-[state=open]:duration-1000 data-[state=open]:zoom-in-100 data-[state=open]:slide-in-from-top-[60%]',
			// close animation
			'data-[state=open]:duration-300 data-[state=closed]:zoom-out-100 data-[state=closed]:slide-out-to-top-[60%]'
		)}
		hide_close_button
		overlay_classes="bg-[#000] opacity-25 dark:opacity-75"
	>
		{@render children?.()}
	</Dialog.Content>
{:else}
	<!-- TODO: Handle overflowing content on small screens. Right now, it needs to be specified consumer-side. -->
	<Drawer.Content hide_dismiss_bar class="bg-background-100 dark:bg-background-200">
		{@render children?.()}
	</Drawer.Content>
{/if}
