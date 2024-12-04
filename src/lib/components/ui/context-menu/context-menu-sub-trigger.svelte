<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive, type WithoutChild } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	}: WithoutChild<ContextMenuPrimitive.SubTriggerProps> & {
		inset?: boolean;
	} = $props();
</script>

<ContextMenuPrimitive.SubTrigger
	bind:ref
	class={cn(
		'flex h-10 cursor-pointer select-none items-center rounded-md px-2 text-sm outline-none data-[highlighted]:bg-gray-200 data-[state=open]:bg-gray-200',
		inset && 'pl-8',
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<Icons.ChevronRight class="ml-auto size-4" />
</ContextMenuPrimitive.SubTrigger>
