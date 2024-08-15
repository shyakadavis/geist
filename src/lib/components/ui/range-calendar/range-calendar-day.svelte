<script lang="ts">
	import { button_variants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.DayProps;
	type $$Events = RangeCalendarPrimitive.DayEvents;

	export let date: $$Props['date'];
	export let month: $$Props['month'];
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<RangeCalendarPrimitive.Day
	on:click
	{date}
	{month}
	class={cn(
		button_variants({ variant: 'tertiary' }),
		'size-9 p-0 font-normal data-[selected]:opacity-100',
		'[&[data-today]:not([data-selected])]:bg-blue-900 [&[data-today]:not([data-selected])]:text-background-100',
		// Selection Start
		'data-[selection-start]:bg-gray-1000 data-[selection-start]:text-background-100',
		// Selection End
		'data-[selection-end]:bg-gray-1000 data-[selection-end]:text-background-100',
		// Outside months
		'data-[outside-month]:pointer-events-none data-[outside-month]:text-gray-700 [&[data-outside-month][data-selected]]:bg-gray-100 [&[data-outside-month][data-selected]]:text-gray-600',
		// Disabled
		'data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-700',
		// Unavailable
		'data-[unavailable]:text-red-800 data-[unavailable]:line-through',
		className
	)}
	{...$$restProps}
	let:disabled
	let:unavailable
	let:builder
>
	<slot {disabled} {unavailable} {builder}>
		{date.day}
	</slot>
</RangeCalendarPrimitive.Day>
