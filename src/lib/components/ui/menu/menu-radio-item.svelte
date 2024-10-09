<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive, type WithoutChild } from 'bits-ui';

	// TODO: Is it WithoutChildrenOrChild or WithoutChild
	type Props = WithoutChild<MenuPrimitive.RadioItemProps>;

	let { class: class_name = undefined, value, children: children_prop, ...rest }: Props = $props();
</script>

<MenuPrimitive.RadioItem
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200',
		class_name
	)}
	{value}
	{...rest}
>
	{#snippet children({ checked })}
		<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			{#if checked === true}
				<Icons.Status class="size-3 fill-current" />
			{/if}
		</span>
		{@render children_prop?.({ checked })}
	{/snippet}
</MenuPrimitive.RadioItem>
