<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.CellProps;

	export let date: $$Props['date'];
	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.Cell
	{date}
	class={cn(
		'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-gray-1000 [&:has([data-selected])]:text-background-100 [&:has([data-selected][data-outside-month])]:bg-gray-100',
		class_name
	)}
	{...$$restProps}
>
	<slot />
</CalendarPrimitive.Cell>
