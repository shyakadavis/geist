<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.HeaderProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<RangeCalendarPrimitive.Header
	class={cn('relative flex w-full items-center justify-between pt-1', class_name)}
	{...$$restProps}
>
	<slot />
</RangeCalendarPrimitive.Header>
