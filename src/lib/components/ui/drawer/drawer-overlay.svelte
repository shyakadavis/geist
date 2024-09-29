<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.OverlayProps;

	interface Props { [key: string]: any }

	let { el = $bindable(undefined), class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<DrawerPrimitive.Overlay
	bind:el
	class={cn('fixed inset-0 z-50 bg-[#000]/80', className)}
	{...rest}
>
	{@render children?.()}
</DrawerPrimitive.Overlay>
