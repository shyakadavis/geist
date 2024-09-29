<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.DescriptionProps;

	interface Props { [key: string]: any }

	let { el = $bindable(undefined), class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<DrawerPrimitive.Description
	bind:el
	class={cn('text-sm text-gray-700', className)}
	{...rest}
>
	{@render children?.()}
</DrawerPrimitive.Description>
