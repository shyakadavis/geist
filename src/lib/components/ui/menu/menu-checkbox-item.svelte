<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	// TODO: Is it WithoutChildrenOrChild or WithoutChild
	type Props = WithoutChildrenOrChild<MenuPrimitive.CheckboxItemProps> & {
		children: Snippet;
	};

	let {
		class: className = undefined,
		checked = $bindable(undefined),
		indeterminate = $bindable(false),
		children,
		...rest
	}: Props = $props();
</script>

<MenuPrimitive.CheckboxItem
	bind:checked
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-700',
		className
	)}
	{...rest}
>
	<span class="absolute left-2 flex size-3.5 items-center justify-center">
		{#if checked}
			<Icons.Check aria-hidden="true" class="size-3" />
		{:else if indeterminate}
			<Icons.Minus aria-hidden="true" class="size-3" />
		{/if}
	</span>
	{@render children?.()}
</MenuPrimitive.CheckboxItem>
