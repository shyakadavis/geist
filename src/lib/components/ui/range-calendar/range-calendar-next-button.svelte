<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { button_variants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type $$Props = RangeCalendarPrimitive.NextButtonProps;
	type $$Events = RangeCalendarPrimitive.NextButtonEvents;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<RangeCalendarPrimitive.NextButton
	on:click
	class={cn(
		button_variants({ variant: 'secondary' }),
		'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
		className
	)}
	{...$$restProps}
	let:builder
>
	<slot {builder}>
		<Icons.ChevronRightSmall aria-hidden="true" class="size-4" />
	</slot>
</RangeCalendarPrimitive.NextButton>
