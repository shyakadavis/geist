<script lang="ts">
	import { Accordion as CollapsePrimitive } from 'bits-ui';

	type $$Props = CollapsePrimitive.Props<false> & {
		size?: 'sm' | 'md';
	};

	export let size: $$Props['size'] = 'md';
</script>

<CollapsePrimitive.Root data-size={size} class="group" {...$$restProps}>
	<slot></slot>
</CollapsePrimitive.Root>
