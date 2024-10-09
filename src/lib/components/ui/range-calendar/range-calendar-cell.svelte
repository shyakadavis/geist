<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.CellProps;

	let { ref = $bindable(null), class: class_name, ...rest }: Props = $props();
</script>

<RangeCalendarPrimitive.Cell
	bind:ref
	class={cn(
		'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-gray-alpha-300 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-outside-month])]:bg-gray-100 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md',
		class_name
	)}
	{...rest}
/>
