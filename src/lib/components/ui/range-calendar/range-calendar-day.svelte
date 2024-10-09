<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { button_variants } from '../button';

	type Props = RangeCalendarPrimitive.DayProps;

	let { ref = $bindable(null), class: class_name, ...rest }: Props = $props();

	export { class_name as class };
</script>

<RangeCalendarPrimitive.Day
	bind:ref
	class={cn(
		button_variants({ variant: 'tertiary' }),
		'size-9 p-0 font-normal hover:bg-transparent hover:shadow-shadow-border data-[selected]:opacity-100',
		// Today
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
		class_name
	)}
	{...rest}
/>
