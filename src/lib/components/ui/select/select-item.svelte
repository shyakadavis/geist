<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui';

	type Props = WithoutChild<SelectPrimitive.ItemProps>;

	let {
		class: class_name = undefined,
		value,
		textValue: text_value,
		children: children_prop,
		...rest
	}: Props = $props();
</script>

<SelectPrimitive.Item
	{value}
	class={cn(
		'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[disabled]:opacity-50',
		class_name
	)}
	{...rest}
>
	{#snippet children({ selected })}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if selected}
				<Icons.Check class="size-4" />
			{/if}
		</span>

		<SelectPrimitive.ItemText>
			{#if children_prop}
				{@render children_prop({ selected })}
			{:else}
				{text_value || value}
			{/if}
		</SelectPrimitive.ItemText>
	{/snippet}
</SelectPrimitive.Item>
