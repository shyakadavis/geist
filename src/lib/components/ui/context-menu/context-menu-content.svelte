<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<ContextMenuPrimitive.ContentProps> & {
		children: Snippet;
	};

	let { class: className = undefined, children, preventScroll = true, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.Content
	class={cn(
		'z-50 min-w-[10rem] rounded-xl bg-background-100 p-2 text-sm text-gray-1000 shadow-shadow-menu focus:outline-none',
		className
	)}
	{preventScroll}
	{...rest}
>
	{@render children?.()}
</ContextMenuPrimitive.Content>
