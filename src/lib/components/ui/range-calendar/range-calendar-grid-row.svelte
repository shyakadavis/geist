<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.GridRowProps;

	let { ref = $bindable(null), class: class_name, ...rest }: Props = $props();
</script>

<RangeCalendarPrimitive.GridRow bind:ref class={cn('flex', class_name)} {...rest} />
