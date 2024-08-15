<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.GridBodyProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<RangeCalendarPrimitive.GridBody class={cn(class_name)} {...$$restProps}>
	<slot />
</RangeCalendarPrimitive.GridBody>
