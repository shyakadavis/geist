<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.ItemProps & {
		inset?: boolean;
		affix?: typeof Icons.ArrowLeft;
		suffix?: typeof Icons.ArrowLeft;
	};

	let {
		class: class_name = undefined,
		inset = undefined,
		affix: Affix = undefined,
		suffix: Suffix = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<ContextMenuPrimitive.Item
	class={cn(
		'relative flex h-10 select-none items-center gap-2 rounded-md px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:cursor-pointer data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-700',
		inset && 'pl-8',
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
</ContextMenuPrimitive.Item>
