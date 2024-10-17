<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.HeadCellProps;

	let { ref = $bindable(null), class: class_name, ...rest }: Props = $props();
</script>

<RangeCalendarPrimitive.HeadCell
	bind:ref
	class={cn('text-muted-foreground w-8 rounded-md text-[0.8rem] font-normal', class_name)}
	{...rest}
/>
