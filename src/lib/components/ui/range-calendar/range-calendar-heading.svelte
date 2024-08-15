<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.HeadingProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<RangeCalendarPrimitive.Heading
	let:headingValue
	class={cn('text-sm font-medium', class_name)}
	{...$$restProps}
>
	<slot {headingValue}>
		{headingValue}
	</slot>
</RangeCalendarPrimitive.Heading>
