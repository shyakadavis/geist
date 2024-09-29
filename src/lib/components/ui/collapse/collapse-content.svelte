<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Accordion as CollapsePrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = WithoutChildrenOrChild<CollapsePrimitive.ContentProps> & {
		children: Snippet;
	};

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CollapsePrimitive.Content
	class={cn(
		'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base transition-all',
		class_name
	)}
	{...rest}
>
	<div class="pb-4 pt-0">
		{@render children?.()}
	</div>
</CollapsePrimitive.Content>
