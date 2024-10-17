<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tooltip as TooltipPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<TooltipPrimitive.ContentProps> & {
		tip?: boolean;
		children?: Snippet;
	};

	let {
		class: class_name = undefined,
		sideOffset = 4,
		tip = true,
		children,
		...rest
	}: Props = $props();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content
		{sideOffset}
		class={cn(
			'z-50 max-w-xs text-balance rounded-md bg-gray-1000 px-3 py-2 text-center text-sm text-background-200 shadow-md',
			class_name
		)}
		{...rest}
	>
		{#if tip}
			<!-- TODO: Polish and bring in a rounded tip -->
			<TooltipPrimitive.Arrow class="text-gray-1000" width={12} height={6} />
		{/if}
		{@render children?.()}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
