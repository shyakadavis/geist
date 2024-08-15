<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.HeaderProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.Header
	class={cn('relative flex w-full items-center justify-between pt-1', class_name)}
	{...$$restProps}
>
	<slot />
</CalendarPrimitive.Header>
