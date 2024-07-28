<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.SubContentProps;
	type $$Events = MenuPrimitive.SubContentEvents;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		x: -10,
		y: 0
	};
	export { className as class };
</script>

<MenuPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 min-w-[10rem] overflow-hidden rounded-xl bg-background-100 p-2 text-sm text-gray-1000 shadow-shadow-menu focus:outline-none',
		className
	)}
	{...$$restProps}
	on:keydown
	on:focusout
	on:pointermove
>
	<slot />
</MenuPrimitive.SubContent>
