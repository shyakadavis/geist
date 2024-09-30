<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tooltip as TooltipPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<TooltipPrimitive.ContentProps> & {
		tip?: boolean;
		children?: Snippet;
	};

	let {
		class: className = undefined,
		sideOffset = 4,
		tip = true,
		children,
		...rest
	}: Props = $props();
</script>

<TooltipPrimitive.Content
	{sideOffset}
	class={cn(
		'z-50 max-w-xs text-balance rounded-md bg-gray-1000 px-3 py-2 text-center text-sm text-background-200 shadow-md',
		className
	)}
	{...rest}
>
	{#if tip}
		<!-- TODO: Why isn't the tooltip arrow rendering -->
		<div aria-hidden="true" class="bg-gray-1000">
			<TooltipPrimitive.Arrow class="rounded-[2.5px]" width={9} height={9} />
		</div>
	{/if}
	{@render children?.()}
</TooltipPrimitive.Content>
