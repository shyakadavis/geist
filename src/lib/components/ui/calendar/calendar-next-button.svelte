<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { button_variants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.NextButtonProps;
	type $$Events = CalendarPrimitive.NextButtonEvents;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.NextButton
	on:click
	class={cn(
		button_variants({ variant: 'secondary' }),
		'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
		class_name
	)}
	{...$$restProps}
	let:builder
>
	<slot {builder}>
		<Icons.ChevronRightSmall aria-hidden="true" class="size-4" />
	</slot>
</CalendarPrimitive.NextButton>
