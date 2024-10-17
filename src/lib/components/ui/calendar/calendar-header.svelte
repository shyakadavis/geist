<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: class_name,
		...restProps
	}: CalendarPrimitive.HeaderProps = $props();
</script>

<CalendarPrimitive.Header
	bind:ref
	class={cn('relative flex w-full items-center justify-between gap-2 pt-1', class_name)}
	{...restProps}
/>
