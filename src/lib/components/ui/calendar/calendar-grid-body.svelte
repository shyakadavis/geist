<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.GridBodyProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.GridBody class={cn(class_name)} {...$$restProps}>
	<slot />
</CalendarPrimitive.GridBody>
