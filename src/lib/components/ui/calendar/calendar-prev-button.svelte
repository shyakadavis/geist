<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { button_variants } from '../button';

	let {
		ref = $bindable(null),
		class: class_name,
		children,
		...restProps
	}: CalendarPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<Icons.ChevronLeft class="size-4" />
{/snippet}

<CalendarPrimitive.PrevButton
	bind:ref
	class={cn(
		button_variants({ variant: 'secondary' }),
		'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
		class_name
	)}
	{...restProps}
	children={children || Fallback}
/>
