<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<ContextMenuPrimitive.SubContentProps> & {
		children: Snippet;
	};

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<ContextMenuPrimitive.SubContent
	class={cn(
		'z-50 min-w-[10rem] overflow-hidden rounded-xl bg-background-100 p-2 text-sm text-gray-1000 shadow-shadow-menu focus:outline-none',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</ContextMenuPrimitive.SubContent>
