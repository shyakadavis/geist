<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.SubContentProps;
	type $$Events = MenuPrimitive.SubContentEvents;

	interface Props { [key: string]: any }

	let {
		class: className = undefined,
		transition = flyAndScale,
		transitionConfig = {
		x: -10,
		y: 0
	},
		children,
		...rest
	}: Props = $props();
	
</script>

<MenuPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 min-w-[10rem] overflow-hidden rounded-xl bg-background-100 p-2 text-sm text-gray-1000 shadow-shadow-menu focus:outline-none',
		className
	)}
	{...rest}
	on:keydown
	on:focusout
	on:pointermove
>
	{@render children?.()}
</MenuPrimitive.SubContent>
