<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<MenuPrimitive.SubContentProps> & {
		children: Snippet;
	};

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.SubContent
	class={cn(
		'z-50 min-w-[10rem] overflow-hidden rounded-xl bg-background-100 p-2 text-sm text-gray-1000 shadow-shadow-menu focus:outline-none',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</MenuPrimitive.SubContent>
