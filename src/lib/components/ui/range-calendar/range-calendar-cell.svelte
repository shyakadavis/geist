<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.CellProps;

	export let date: $$Props['date'];
	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<RangeCalendarPrimitive.Cell
	{date}
	class={cn(
		'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-gray-alpha-300 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-outside-month])]:bg-gray-100 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md',
		class_name
	)}
	{...$$restProps}
>
	<slot />
</RangeCalendarPrimitive.Cell>
