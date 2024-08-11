<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type $$Props = TabsPrimitive.ListProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<TabsPrimitive.List
	class={cn(
		'inline-flex w-full flex-wrap items-baseline gap-3 overflow-hidden overflow-x-auto p-1 text-gray-900 [box-shadow:_0_-1px_0_var(--accents-2)_inset;]',
		className
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
