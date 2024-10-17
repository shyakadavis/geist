<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { button_variants } from '../button';

	let {
		ref = $bindable(null),
		class: class_name,
		...restProps
	}: CalendarPrimitive.DayProps = $props();
</script>

<CalendarPrimitive.Day
	class={cn(
		button_variants({ variant: 'tertiary' }),
		'size-9 p-0 font-normal hover:bg-transparent hover:shadow-shadow-border',
		// Today
		'[&[data-today]:not([data-selected])]:bg-blue-900 [&[data-today]:not([data-selected])]:text-background-100',
		// Selected
		'',
		// Disabled
		'data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-700',
		// Unavailable
		'data-[unavailable]:text-red-800 data-[unavailable]:line-through',
		// Outside months
		'data-[outside-month]:pointer-events-none data-[outside-month]:text-gray-700 [&[data-outside-month][data-selected]]:bg-gray-100 [&[data-outside-month][data-selected]]:text-gray-600',
		class_name
	)}
	bind:ref
	{...restProps}
/>
