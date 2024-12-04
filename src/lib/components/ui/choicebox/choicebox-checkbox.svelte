<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils.js';
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
		title: string;
		children?: Snippet;
		'aria-labelledby'?: string;
		description?: string;
	};

	let {
		class: class_name = undefined,
		checked = $bindable(false),
		indeterminate = $bindable(false),
		id = undefined,
		title,
		description,
		'aria-labelledby': aria_labelledby = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<label
	id={aria_labelledby}
	for={id}
	class={cn(
		'inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border p-3 transition-colors',
		"hover:border-gray-500 hover:bg-gray-100 hover:has-[button[aria-checked='true']]:bg-blue-200",
		"has-[button[aria-checked='true']]:border-blue-600 has-[button[aria-checked='true']]:bg-blue-100",
		// disabled
		"has-[button[disabled='']]:cursor-not-allowed has-[button[disabled='']]:hover:border-gray-400 has-[button[disabled='']]:hover:bg-transparent"
	)}
>
	<CheckboxPrimitive.Root
		{id}
		class={cn(
			'peer order-2 box-content size-4 shrink-0 items-center gap-2 rounded-[4px] border border-gray-700 bg-background-100 ring-offset-background-200 transition-[border-color,background,box-shadow] delay-0 duration-200 ease-in-out hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2',
			// checked
			'data-[state=checked]:border-blue-900 data-[state=checked]:bg-blue-900 data-[state=checked]:text-background-200',
			// disabled
			'disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-100 disabled:text-gray-500 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:border-gray-500 data-[disabled=true]:bg-gray-100 data-[disabled=true]:text-gray-500',
			// disabled & checked
			'data-[state=checked]:data-[disabled=true]:border-gray-600 data-[state=checked]:data-[disabled=true]:bg-gray-600 data-[state=checked]:data-[disabled=true]:text-background-200',
			class_name
		)}
		bind:checked
		{...rest}
	>
		{#snippet children({ checked, indeterminate })}
			<div class={cn('flex size-4 items-center justify-center p-0.5 text-current')}>
				{#if checked}
					<Icons.Check aria-hidden="true" class="size-4" />
				{:else if indeterminate}
					<Icons.Minus aria-hidden="true" class="size-4" />
				{/if}
			</div>
		{/snippet}
	</CheckboxPrimitive.Root>
	<div
		class="grid grow gap-2 text-sm transition-colors peer-disabled:text-gray-500 peer-aria-checked:text-blue-900 peer-disabled:[&_p]:text-gray-500 peer-aria-checked:[&_p]:text-blue-900"
	>
		<p class="font-medium">{title}</p>
		{#if description}
			<p class="text-gray-900">{description}</p>
		{/if}
	</div>
</label>
