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
	class={cn('z-50 w-72 rounded-md border bg-background-100 p-4 shadow-md outline-none', class_name)}
	{...rest}
>
	{@render children?.()}
</PopoverPrimitive.Content>
