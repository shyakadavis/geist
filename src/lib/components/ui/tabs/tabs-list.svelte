<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type $$Props = TabsPrimitive.ListProps & {
		variant?: 'default' | 'secondary';
	};

	let class_name: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export { class_name as class };
</script>

<!-- TODO: Add a no-scrollbar class. -->
<TabsPrimitive.List
	data-variant={variant}
	class={cn(
		'group inline-flex w-full flex-wrap items-baseline gap-3 overflow-hidden overflow-x-auto p-1 text-gray-900 data-[variant=default]:[box-shadow:_0_-1px_0_var(--accents-2)_inset;]',
		class_name
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
