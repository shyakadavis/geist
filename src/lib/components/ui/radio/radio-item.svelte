<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import { cn } from '$lib/utils.js';
	import { RadioGroup as RadioPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<RadioPrimitive.ItemProps> & {
		children?: Snippet;
	};

	let { class: class_name = undefined, value, children, ...rest }: Props = $props();
</script>

<div class="flex items-center gap-2">
	<RadioPrimitive.Item
		id={value}
		{value}
		class={cn(
			'peer aspect-square size-4 cursor-pointer rounded-full border border-gray-1000 text-gray-1000 ring-offset-background-200 transition-[color,background-color] ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-transparent',
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
						class="size-2.5 fill-current text-current"
					>
						<circle cx="12" cy="12" r="10"></circle>
					</svg>
				{/if}
			</div>
		{/snippet}
	</RadioPrimitive.Item>
	<Label for={value} class="cursor-pointer text-xs peer-disabled:cursor-not-allowed">
		{@render children?.()}
	</Label>
</div>
