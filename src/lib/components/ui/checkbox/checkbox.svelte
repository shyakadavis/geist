<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { Label } from '../label';

	type $$Props = CheckboxPrimitive.Props;
	type $$Events = CheckboxPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let checked: $$Props['checked'] = false;
	export let id: $$Props['id'] = undefined;
	export let aria_labelledby: $$Props['aria-labelledby'] = undefined;
	export { className as class };
</script>

<!-- 
TODO: How to properly document these styles? 
Here are considerations: there are base classes for the likes such as focus, but the ugly ones are the data-[state=checked] and data-[disabled=true] classes.
Some are for individual states, e.g disabled, checked, while others are combinations of states, e.g checked and disabled.
  -->
<div class="inline-flex items-center gap-2">
	<CheckboxPrimitive.Root
		class={cn(
			'peer box-content size-4 shrink-0 items-center gap-2 rounded-[4px] border border-gray-700 bg-background-100 ring-offset-background-200 transition-[border-color,background,box-shadow] delay-0 duration-200 ease-in-out hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-100 disabled:text-gray-500 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:border-gray-500 data-[state=checked]:border-gray-1000 data-[state=checked]:data-[disabled=true]:border-gray-600 data-[disabled=true]:bg-gray-100 data-[state=checked]:bg-gray-1000 data-[state=checked]:data-[disabled=true]:bg-gray-600 data-[disabled=true]:text-gray-500 data-[state=checked]:data-[disabled=true]:text-background-200 data-[state=checked]:text-background-200',
			className
		)}
		{id}
		bind:checked
		{...$$restProps}
		on:click
	>
		<CheckboxPrimitive.Indicator
			class={cn('flex size-4 items-center justify-center p-0.5 text-current')}
			let:isChecked
			let:isIndeterminate
		>
			{#if isChecked}
				<Icons.Check aria-hidden="true" class="size-4" />
			{:else if isIndeterminate}
				<Icons.Minus aria-hidden="true" class="size-4" />
			{/if}
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
	<Label id={aria_labelledby} for={id}>
		<slot></slot>
	</Label>
</div>
