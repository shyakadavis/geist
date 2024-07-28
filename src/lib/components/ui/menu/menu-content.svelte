<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.ContentProps;
	type $$Events = MenuPrimitive.ContentEvents;

	let className: $$Props['class'] = undefined;
	export let sideOffset: $$Props['sideOffset'] = 4;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = undefined;
	export { className as class };
</script>

<MenuPrimitive.Content
	{transition}
	{transitionConfig}
	{sideOffset}
	class={cn(
		'z-50 min-w-[10rem] rounded-xl bg-background-100 p-2 text-gray-1000 shadow-shadow-menu focus:outline-none',
		className
	)}
	{...$$restProps}
	on:keydown
>
	<slot />
</MenuPrimitive.Content>
