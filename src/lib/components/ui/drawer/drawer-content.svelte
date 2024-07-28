<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import DrawerOverlay from './drawer-overlay.svelte';

	type $$Props = DrawerPrimitive.ContentProps & {
		hide_dismiss_bar?: boolean;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let hide_dismiss_bar: $$Props['hide_dismiss_bar'] = false;
</script>

<DrawerPrimitive.Portal>
	<DrawerOverlay />
	<DrawerPrimitive.Content
		class={cn(
			'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background-100',
			className
		)}
		{...$$restProps}
	>
		{#if !hide_dismiss_bar}
			<div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-400"></div>
		{/if}
		<slot />
	</DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
