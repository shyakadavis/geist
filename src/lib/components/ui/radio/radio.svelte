<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import RadioItem from './radio-item.svelte';

	type Props = RadioGroupPrimitive.RootProps & {
		checked?: boolean;
	};

	let {
		class: class_name = undefined,
		value = $bindable(undefined),
		checked = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<RadioGroupPrimitive.Root bind:value class={cn('grid gap-2', class_name)} {...rest}>
	{#if checked && value}
		<RadioItem {value} />
	{:else}
		{@render children?.()}
	{/if}
</RadioGroupPrimitive.Root>
