<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.GridProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<RangeCalendarPrimitive.Grid
	class={cn('w-full border-collapse space-y-1', class_name)}
	{...$$restProps}
>
	<slot />
</RangeCalendarPrimitive.Grid>
