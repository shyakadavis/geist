<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { Label } from '../label';

	type Props = WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
		children: Snippet;
		'aria-labelledby'?: string;
	};

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: class_name,
		id = undefined,
		'aria-labelledby': aria_labelledby = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<!-- 
TODO: How to properly document these styles? 
Here are considerations: there are base classes for the likes such as focus, but the ugly ones are the data-[state=checked] and data-[disabled=true] classes.
Some are for individual states, e.g disabled, checked, while others are combinations of states, e.g checked and disabled.
  -->
<div class="inline-flex items-center gap-2">
	<CheckboxPrimitive.Root
		{id}
		bind:ref
		bind:checked
		bind:indeterminate
		class={cn(
			'peer box-content size-4 shrink-0 items-center gap-2 rounded-[4px] border border-gray-700 bg-background-100 ring-offset-background-200 transition-[border-color,background,box-shadow] delay-0 duration-200 ease-in-out hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-100 disabled:text-gray-500 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:border-gray-500 data-[state=checked]:border-gray-1000 data-[state=checked]:data-[disabled=true]:border-gray-600 data-[disabled=true]:bg-gray-100 data-[state=checked]:bg-gray-1000 data-[state=checked]:data-[disabled=true]:bg-gray-600 data-[disabled=true]:text-gray-500 data-[state=checked]:data-[disabled=true]:text-background-200 data-[state=checked]:text-background-200',
			class_name
		)}
		{...rest}
	>
		{#snippet children({ checked, indeterminate })}
			<div class="flex size-4 items-center justify-center p-0.5 text-current">
				{#if indeterminate}
					<Icons.Minus aria-hidden="true" class="size-4" />
				{:else if checked}
					<Icons.Check aria-hidden="true" class="size-4" />
				{/if}
			</div>
		{/snippet}
	</CheckboxPrimitive.Root>
	<Label id={aria_labelledby} for={id}>
		{@render children?.()}
	</Label>
</div>
