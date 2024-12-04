<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive, type WithoutChild } from 'bits-ui';

	type Props = WithoutChild<ContextMenuPrimitive.RadioItemProps>;

	let {
		ref = $bindable(null),
		class: className,
		children: childrenProp,
		...restProps
	}: Props = $props();
</script>

<ContextMenuPrimitive.RadioItem
	bind:ref
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200',
		className
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if checked}
				<Icons.Status class="size-3 fill-current" />
			{/if}
		</span>
		{@render childrenProp?.({ checked })}
	{/snippet}
</ContextMenuPrimitive.RadioItem>
