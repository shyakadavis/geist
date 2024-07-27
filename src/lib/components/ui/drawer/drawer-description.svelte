<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.DescriptionProps;

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Description
	bind:el
	class={cn('text-sm text-gray-700', className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Description>
