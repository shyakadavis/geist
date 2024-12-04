<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	// TODO: Is it WithoutChildrenOrChild or WithoutChild
	type Props = WithoutChildrenOrChild<MenuPrimitive.ContentProps> & {
		children?: Snippet;
	};

	let {
		class: class_name = undefined,
		sideOffset = 8,
		align = 'start',
		children,
		...rest
	}: Props = $props();
</script>

<MenuPrimitive.Portal>
	<MenuPrimitive.Content
		{align}
		{sideOffset}
		class={cn(
			'z-50 min-w-[10rem] rounded-xl bg-background-100 p-2 text-gray-1000 shadow-shadow-menu focus:outline-none',
			class_name
		)}
		{...rest}
	>
		{@render children?.()}
	</MenuPrimitive.Content>
</MenuPrimitive.Portal>
