<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Label as LabelPrimitive } from 'bits-ui';

	type $$Props = LabelPrimitive.Props & {
		value?: string;
	};
	type $$Events = LabelPrimitive.Events;

	let class_name: $$Props['class'] = undefined;
	export let value: $$Props['value'] = undefined;
	export { class_name as class };
</script>

<LabelPrimitive.Root
	class={cn(
		'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-gray-600',
		class_name
	)}
	{...$$restProps}
	on:mousedown
>
	{#if value}
		<p class="mb-2 text-xs text-gray-900">{value}</p>
	{/if}
	<slot></slot>
</LabelPrimitive.Root>
