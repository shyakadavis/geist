<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Accordion as CollapsePrimitive } from 'bits-ui';

	type Props = CollapsePrimitive.ItemProps;

	let { class: class_name = undefined, value, children, ...rest }: Props = $props();
</script>

<CollapsePrimitive.Item {value} class={cn('border-b first:border-t', class_name)} {...rest}>
	{@render children?.()}
</CollapsePrimitive.Item>
