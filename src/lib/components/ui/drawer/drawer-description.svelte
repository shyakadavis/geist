<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type Props = DrawerPrimitive.DescriptionProps;

	let { ref = $bindable(null), class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<DrawerPrimitive.Description bind:ref class={cn('text-sm text-gray-700', class_name)} {...rest}>
	{@render children?.()}
</DrawerPrimitive.Description>
