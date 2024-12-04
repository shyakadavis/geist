<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<ContextMenuPrimitive.CheckboxItemProps> & {
		children?: Snippet;
	};

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: class_name,
		children: childrenProp,
		...rest
	}: Props = $props();
</script>

<ContextMenuPrimitive.CheckboxItem
	bind:ref
	bind:checked
	bind:indeterminate
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-700',
		class_name
	)}
	{...rest}
>
	{#snippet children({ checked, indeterminate })}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if indeterminate}
				<Icons.Minus aria-hidden="true" class="size-3" />
			{:else if checked}
				<Icons.Check aria-hidden="true" class="size-3" />
			{/if}
		</span>
		{@render childrenProp?.()}
	{/snippet}
</ContextMenuPrimitive.CheckboxItem>
