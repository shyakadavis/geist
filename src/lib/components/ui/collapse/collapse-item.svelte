<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Accordion as CollapsePrimitive } from 'bits-ui';

	type $$Props = CollapsePrimitive.ItemProps;

	let class_name: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { class_name as class };
</script>

<CollapsePrimitive.Item {value} class={cn('border-b first:border-t', class_name)} {...$$restProps}>
	<slot />
</CollapsePrimitive.Item>
