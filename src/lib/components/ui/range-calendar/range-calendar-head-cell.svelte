<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.HeadCellProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<RangeCalendarPrimitive.HeadCell
	class={cn('w-9 rounded-md text-[0.8rem] font-normal text-gray-900', class_name)}
	{...$$restProps}
>
	<slot />
</RangeCalendarPrimitive.HeadCell>
