<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import { cn } from '$lib/utils.js';

	type $$Props = DrawerPrimitive.OverlayProps;

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Overlay
	bind:el
	class={cn('bg-black/80 fixed inset-0 z-50', className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Overlay>
