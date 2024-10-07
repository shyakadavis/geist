<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Accordion as CollapsePrimitive, type WithoutChild } from 'bits-ui';

	type Props = WithoutChild<CollapsePrimitive.ContentProps>;

	let { ref = $bindable(null), class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<CollapsePrimitive.Content
	bind:ref
	class={cn(
		'overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
		class_name
	)}
	{...rest}
>
	<div class="pb-4 pt-0">
		{@render children?.()}
	</div>
</CollapsePrimitive.Content>
