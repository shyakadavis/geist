<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: class_name,
		...restProps
	}: CalendarPrimitive.CellProps = $props();
</script>

<CalendarPrimitive.Cell
	class={cn(
		'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-gray-1000 [&:has([data-selected])]:text-background-100 [&:has([data-selected][data-outside-month])]:bg-gray-100',
		class_name
	)}
	bind:ref
	{...restProps}
/>
