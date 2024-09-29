<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import RadioItem from './radio-item.svelte';

	type $$Props = RadioGroupPrimitive.Props & {
		checked?: boolean;
	};

	
	interface Props { [key: string]: any }

	let {
		class: className = undefined,
		value = $bindable(undefined),
		checked = false,
		children,
		...rest
	}: Props = $props();
</script>

<RadioGroupPrimitive.Root bind:value class={cn('grid gap-2', className)} {...rest}>
	{#if checked && value}
		<RadioItem {value} />
	{:else}
		{@render children?.()}
	{/if}
</RadioGroupPrimitive.Root>
