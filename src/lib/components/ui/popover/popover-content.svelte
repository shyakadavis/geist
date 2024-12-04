<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Popover as PopoverPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<PopoverPrimitive.ContentProps> & {
		children?: Snippet;
	};

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<PopoverPrimitive.Content
	class={cn(
		'z-50 w-72 rounded-md border bg-background-100 p-4 shadow-md outline-none',
		// open animation
		'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95  data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
		// close animation
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-95',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</PopoverPrimitive.Content>
