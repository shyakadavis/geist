<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.ItemProps;

	// TODO: Figure out how `asChild` should be replaced
	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CommandPrimitive.Item
	class={cn(
		'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-alpha-100 aria-selected:text-gray-1000 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</CommandPrimitive.Item>
