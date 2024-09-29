<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	// TODO: Is it WithoutChildrenOrChild or WithoutChild
	type Props = WithoutChildrenOrChild<MenuPrimitive.RadioItemProps> & {
		children?: Snippet;
	};

	let { class: class_name = undefined, value, children, ...rest }: Props = $props();
</script>

<MenuPrimitive.RadioItem
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200',
		class_name
	)}
	{value}
	{...rest}
>
	<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
		<MenuPrimitive.RadioIndicator>
			<Icons.Status class="size-3 fill-current" />
		</MenuPrimitive.RadioIndicator>
	</span>
	{@render children?.()}
</MenuPrimitive.RadioItem>
