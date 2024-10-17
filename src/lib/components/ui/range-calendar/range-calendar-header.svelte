<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.HeaderProps;

	let { ref = $bindable(null), class: class_name, ...rest }: Props = $props();
</script>

<RangeCalendarPrimitive.Header
	bind:ref
	class={cn('relative flex w-full items-center justify-between pt-1', class_name)}
	{...rest}
/>
