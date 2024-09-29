<script lang="ts">
	import { Accordion as CollapsePrimitive } from 'bits-ui';

	type Props = CollapsePrimitive.RootProps & {
		size?: 'sm' | 'md';
	};

	let { size = 'md', children, ...rest }: Props = $props();
</script>

<CollapsePrimitive.Root data-size={size} class="group" {...rest}>
	{@render children?.()}
</CollapsePrimitive.Root>
