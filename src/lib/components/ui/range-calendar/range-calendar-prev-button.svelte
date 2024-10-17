<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { button_variants } from '../button';

	type Props = RangeCalendarPrimitive.NextButtonProps;

	let { ref = $bindable(null), class: class_name, children, ...rest }: Props = $props();
</script>

{#snippet Fallback()}
	<Icons.ChevronLeft class="size-4" />
{/snippet}

<RangeCalendarPrimitive.NextButton
	bind:ref
	class={cn(
		button_variants({ variant: 'secondary' }),
		'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
		class_name
	)}
	{...rest}
	children={children || Fallback}
/>
