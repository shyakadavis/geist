<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.HeadingProps;

	let { ref = $bindable(null), class: class_name, ...rest }: Props = $props();
</script>

<RangeCalendarPrimitive.Heading bind:ref class={cn('text-sm font-medium', class_name)} {...rest} />
