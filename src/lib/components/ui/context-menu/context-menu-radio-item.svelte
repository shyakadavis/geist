<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type $$Props = ContextMenuPrimitive.RadioItemProps;
	type $$Events = ContextMenuPrimitive.RadioItemEvents;

	let className: $$Props['class'] = undefined;
	export let value: ContextMenuPrimitive.RadioItemProps['value'];
	export { className as class };
</script>

<ContextMenuPrimitive.RadioItem
	class={cn(
		'relative flex h-10 cursor-pointer select-none items-center rounded-md pl-8 pr-2 text-sm outline-none data-[disabled]:cursor-default data-[highlighted]:bg-gray-200',
		className
	)}
	{value}
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
		<ContextMenuPrimitive.RadioIndicator>
			<Icons.Status class="size-3 fill-current" />
		</ContextMenuPrimitive.RadioIndicator>
	</span>
	<slot />
</ContextMenuPrimitive.RadioItem>
