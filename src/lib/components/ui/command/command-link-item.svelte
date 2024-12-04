<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CommandPrimitive.LinkItemProps = $props();
</script>

<CommandPrimitive.LinkItem
	class={cn(
		'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-alpha-100 aria-selected:text-gray-1000 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
	bind:ref
	{...restProps}
/>
