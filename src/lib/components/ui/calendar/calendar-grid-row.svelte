<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.GridRowProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.GridRow class={cn('flex gap-1', class_name)} {...$$restProps}>
	<slot />
</CalendarPrimitive.GridRow>
