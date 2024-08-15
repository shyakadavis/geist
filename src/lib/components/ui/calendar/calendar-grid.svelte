<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.GridProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.Grid class={cn('w-full border-collapse space-y-1', class_name)} {...$$restProps}>
	<slot />
</CalendarPrimitive.Grid>
