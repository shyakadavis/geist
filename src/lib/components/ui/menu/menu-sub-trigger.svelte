<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.SubTriggerProps & {
		inset?: boolean;
	};
	type $$Events = MenuPrimitive.SubTriggerEvents;

	let className: $$Props['class'] = undefined;
	export let inset: $$Props['inset'] = undefined;
	export { className as class };
</script>

<MenuPrimitive.SubTrigger
	class={cn(
		'flex h-10 cursor-pointer select-none items-center rounded-md px-2 text-sm outline-none data-[highlighted]:bg-gray-200 data-[state=open]:bg-gray-200',
		inset && 'pl-8',
		className
	)}
	{...$$restProps}
	on:click
	on:keydown
	on:focusin
	on:focusout
	on:pointerleave
	on:pointermove
>
	<slot />
	<Icons.ChevronRight class="ml-auto size-4" />
</MenuPrimitive.SubTrigger>
