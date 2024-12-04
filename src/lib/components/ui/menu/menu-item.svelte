<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type Props = MenuPrimitive.ItemProps & {
		inset?: boolean;
		type?: 'error';
		affix?: typeof Icons.Accessibility;
		suffix?: typeof Icons.Accessibility;
	};

	let {
		class: class_name = undefined,
		inset = undefined,
		type = undefined,
		affix: Affix = undefined,
		suffix: Suffix = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<MenuPrimitive.Item
	class={cn(
		'relative flex h-10 select-none items-center gap-2 rounded-md px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:cursor-pointer data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-700',
		inset && 'pl-8',
		{
			'text-red-900 data-[disabled]:text-red-600': type === 'error'
		},
		class_name
	)}
	{...rest}
>
	{#if Affix}
		<Affix class="size-4" aria-hidden="true" />
	{/if}
	{@render children?.()}
	{#if Suffix}
		<Suffix class="ml-auto size-4" aria-hidden="true" />
	{/if}
</MenuPrimitive.Item>
