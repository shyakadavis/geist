<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: class_name,
		...restProps
	}: CalendarPrimitive.HeadingProps = $props();
</script>

<CalendarPrimitive.Heading bind:ref class={cn('text-sm font-medium', class_name)} {...restProps} />
