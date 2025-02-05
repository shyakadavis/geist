<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RadioGroup as ChoiceboxGroupPrimitive } from 'bits-ui';

	// TODO: This is poor implementation of the choicebox. Needs to be re-written.
	type Props = ChoiceboxGroupPrimitive.RootProps & {
		direction?: 'row' | 'column';
		type: 'radio' | 'checkbox';
		label?: string;
	};

	let {
		class: class_name = undefined,
		value = $bindable(undefined),
		direction = 'column',
		label = undefined,
		type,
		children,
		...rest
	}: Props = $props();
</script>

<div class="grid gap-2">
	{#if label}
		<span class="text-xs text-gray-700">{label}</span>
	{/if}
	{#if type === 'radio'}
		<ChoiceboxGroupPrimitive.Root
			bind:value
			class={cn(
				'flex gap-3',
				{
					'flex-col': direction === 'column',
					'flex-row': direction === 'row'
				},
				class_name
			)}
			{...rest}
		>
			{@render children?.()}
		</ChoiceboxGroupPrimitive.Root>
	{:else if type === 'checkbox'}
		<!-- TODO: When spreading the `rest` props, TS complains. -->
		<div
			class={cn(
				'flex gap-3',
				{
					'flex-col': direction === 'column',
					'flex-row': direction === 'row'
				},
				class_name
			)}
		>
			{@render children?.()}
		</div>
	{/if}
</div>
