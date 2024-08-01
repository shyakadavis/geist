<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import RadioItem from './radio-item.svelte';

	type $$Props = RadioGroupPrimitive.Props & {
		checked?: boolean;
	};

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = undefined;
	export { className as class };
	export let checked: $$Props['checked'] = false;
</script>

<RadioGroupPrimitive.Root bind:value class={cn('grid gap-2', className)} {...$$restProps}>
	{#if checked && value}
		<RadioItem {value} />
	{:else}
		<slot></slot>
	{/if}
</RadioGroupPrimitive.Root>
