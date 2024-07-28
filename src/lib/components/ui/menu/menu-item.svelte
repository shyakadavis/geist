<script lang="ts">
	import type { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.ItemProps & {
		inset?: boolean;
		type?: 'error';
		affix?: typeof Icons.Accessibility;
		suffix?: typeof Icons.Accessibility;
	};
	type $$Events = MenuPrimitive.ItemEvents;

	let className: $$Props['class'] = undefined;
	export let inset: $$Props['inset'] = undefined;
	export let type: $$Props['type'] = undefined;
	export let affix: $$Props['affix'] = undefined;
	export let suffix: $$Props['suffix'] = undefined;
	export { className as class };
</script>

<MenuPrimitive.Item
	class={cn(
		'relative flex h-10 select-none items-center gap-2 rounded-md px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:cursor-pointer data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-700',
		inset && 'pl-8',
		{
			'text-red-900 data-[disabled]:text-red-600': type === 'error'
		},
		className
	)}
	{...$$restProps}
	on:click
	on:keydown
	on:focusin
	on:focusout
	on:pointerdown
	on:pointerleave
	on:pointermove
>
	{#if affix}
		<svelte:component this={affix} class="size-4" aria-hidden="true" />
	{/if}
	<slot />
	{#if suffix}
		<svelte:component this={suffix} class="ml-auto size-4" aria-hidden="true" />
	{/if}
</MenuPrimitive.Item>
