<script lang="ts">
	import { cn, type PrimitiveElementAttributes } from '$lib/utils.js';

	type Props = PrimitiveElementAttributes;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<caption bind:this={ref} class={cn('mt-4 text-sm', class_name)} {...rest}>
	{@render children?.()}
</caption>
