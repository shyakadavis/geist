<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils.js';
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type $$Props = PopoverPrimitive.ContentProps;
	interface Props { [key: string]: any }

	let {
		class: className = undefined,
		transition = flyAndScale,
		transitionConfig = undefined,
		children,
		...rest
	}: Props = $props();
	
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn('z-50 w-72 rounded-md border bg-background-100 p-4 shadow-md outline-none', className)}
	{...rest}
>
	{@render children?.()}
</PopoverPrimitive.Content>
