<script lang="ts">
	import { cn, type PrimitiveTableSectionAttributes } from '$lib/utils.js';

	type Props = PrimitiveTableSectionAttributes;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<thead bind:this={ref} class={cn('[&_tr]:border-b', class_name)} {...rest}>
	{@render children?.()}
</thead>
