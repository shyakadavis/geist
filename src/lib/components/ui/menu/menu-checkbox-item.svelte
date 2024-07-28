<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.CheckboxItemProps;
	type $$Events = MenuPrimitive.CheckboxItemEvents;

	let className: $$Props['class'] = undefined;
	export let checked: $$Props['checked'] = undefined;
	export { className as class };
</script>

<MenuPrimitive.CheckboxItem
	bind:checked
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-700',
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
	<span class="absolute left-2 flex size-3.5 items-center justify-center">
		<MenuPrimitive.CheckboxIndicator>
			<Icons.Check class="size-3" />
		</MenuPrimitive.CheckboxIndicator>
	</span>
	<slot />
</MenuPrimitive.CheckboxItem>
