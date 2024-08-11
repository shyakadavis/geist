<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type $$Props = TabsPrimitive.TriggerProps;
	type $$Events = TabsPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { className as class };
</script>

<TabsPrimitive.Trigger
	class={cn(
		'group relative inline-flex items-center justify-center whitespace-nowrap px-1.5 py-3 text-sm font-medium ring-offset-background-200 transition-colors first:pl-0 hover:text-gray-1000 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-1000',
		className
	)}
	{value}
	{...$$restProps}
	on:click
>
	<slot />
	<!-- TODO: Animate with cross-fade -->
	<div class="absolute -bottom-1 h-0.5 w-full group-data-[state=active]:bg-gray-1000"></div>
</TabsPrimitive.Trigger>
