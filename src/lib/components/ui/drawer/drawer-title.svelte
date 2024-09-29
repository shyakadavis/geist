<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type Props = DrawerPrimitive.TitleProps;

	let {
		el = $bindable(undefined),
		class: class_name = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<DrawerPrimitive.Title
	bind:el
	class={cn('text-lg font-semibold leading-none tracking-tight', class_name)}
	{...rest}
>
	{@render children?.()}
</DrawerPrimitive.Title>
