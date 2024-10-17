<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { RadioGroup as ChoiceboxRadioPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<ChoiceboxRadioPrimitive.ItemProps> & {
		title: string;
		description?: string;
		children?: Snippet;
	};

	let {
		title,
		description,
		class: class_name = undefined,
		value,
		children,
		...rest
	}: Props = $props();
</script>

<!-- TODO: Move focus ring from the dot to the parent -->
<label
	for={value}
	class={cn(
		'group flex w-full cursor-pointer items-center gap-2 rounded-md border p-3 transition-colors',
		"hover:border-gray-500 hover:bg-gray-100 hover:has-[button[aria-checked='true']]:bg-blue-200",
		"has-[button[aria-checked='true']]:border-blue-600 has-[button[aria-checked='true']]:bg-blue-100",
		// disabled
		"has-[button[disabled='']]:cursor-not-allowed has-[button[disabled='']]:hover:border-gray-400 has-[button[disabled='']]:hover:bg-transparent"
	)}
>
	<ChoiceboxRadioPrimitive.Item
		id={value}
		{value}
		class={cn(
			'peer order-2 aspect-square size-4 cursor-pointer rounded-full border border-gray-500 text-gray-1000 transition-[color,background-color] ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-transparent aria-checked:border-blue-900',
			'group-hover:bg-background-200',
			class_name
		)}
		{...rest}
	>
		{#snippet children({ checked })}
			<div class="flex items-center justify-center">
				{#if checked === true}
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-2.5 fill-blue-900 text-blue-900"
					>
						<circle cx="12" cy="12" r="10"></circle>
					</svg>
				{/if}
			</div>
		{/snippet}
	</ChoiceboxRadioPrimitive.Item>
	<div
		class="grid grow gap-2 text-sm transition-colors peer-disabled:text-gray-500 peer-aria-checked:text-blue-900 peer-disabled:[&_p]:text-gray-500 peer-aria-checked:[&_p]:text-blue-900"
	>
		<p class="font-medium">{title}</p>
		{#if description}
			<p class="text-gray-900">{description}</p>
		{/if}
	</div>
</label>

<!-- TODO: Add a custom component prop here. Only issue is, how to access `checked` outside of the designated snippet -->
