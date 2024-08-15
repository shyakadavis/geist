<script lang="ts">
	import { button_variants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.DayProps;
	type $$Events = CalendarPrimitive.DayEvents;

	export let date: $$Props['date'];
	export let month: $$Props['month'];
	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.Day
	on:click
	{date}
	{month}
	class={cn(
		button_variants({ variant: 'tertiary' }),
		'size-9 p-0 font-normal hover:bg-transparent hover:shadow-shadow-border',
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
	{...$$restProps}
	let:selected
	let:disabled
	let:unavailable
	let:builder
>
	<slot {selected} {disabled} {unavailable} {builder}>
		{date.day}
	</slot>
</CalendarPrimitive.Day>
