<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type $$Props = CalendarPrimitive.HeadCellProps;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<CalendarPrimitive.HeadCell
	class={cn('w-9 rounded-md text-[0.8rem] font-normal text-gray-900', class_name)}
	{...$$restProps}
>
	<slot />
</CalendarPrimitive.HeadCell>
