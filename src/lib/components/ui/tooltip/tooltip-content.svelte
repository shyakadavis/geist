<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils.js';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type $$Props = TooltipPrimitive.ContentProps & {
		tip?: boolean;
	};

	let className: $$Props['class'] = undefined;
	export let sideOffset: $$Props['sideOffset'] = 4;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		y: 8,
		duration: 150
	};
	export let tip: $$Props['tip'] = true;
	export { className as class };
</script>

<TooltipPrimitive.Content
	{transition}
	{transitionConfig}
	{sideOffset}
	class={cn(
		'z-50 max-w-xs text-balance rounded-md bg-gray-1000 px-3 py-2 text-center text-sm text-background-200 shadow-md',
		className
	)}
	{...$$restProps}
>
	{#if tip}
		<div aria-hidden="true" class="bg-gray-1000">
			<TooltipPrimitive.Arrow class="rounded-[2.5px]" size={9} />
		</div>
	{/if}
	<slot></slot>
</TooltipPrimitive.Content>
