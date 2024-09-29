<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils.js';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type $$Props = TooltipPrimitive.ContentProps & {
		tip?: boolean;
	};

	interface Props { [key: string]: any }

	let {
		class: className = undefined,
		sideOffset = 4,
		transition = flyAndScale,
		transitionConfig = {
		y: 8,
		duration: 150
	},
		tip = true,
		children,
		...rest
	}: Props = $props();
	
</script>

<TooltipPrimitive.Content
	{transition}
	{transitionConfig}
	{sideOffset}
	class={cn(
		'z-50 max-w-xs text-balance rounded-md bg-gray-1000 px-3 py-2 text-center text-sm text-background-200 shadow-md',
		className
	)}
	{...rest}
>
	{#if tip}
		<div aria-hidden="true" class="bg-gray-1000">
			<TooltipPrimitive.Arrow class="rounded-[2.5px]" size={9} />
		</div>
	{/if}
	{@render children?.()}
</TooltipPrimitive.Content>
