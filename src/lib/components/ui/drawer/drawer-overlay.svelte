<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type Props = DrawerPrimitive.OverlayProps;

	let {
		el = $bindable(undefined),
		class: class_name = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<DrawerPrimitive.Overlay
	bind:el
	class={cn('fixed inset-0 z-50 bg-[#000]/80', class_name)}
	{...rest}
>
	{@render children?.()}
</DrawerPrimitive.Overlay>
