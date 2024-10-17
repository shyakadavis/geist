<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLTableSectionElement>>;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<thead bind:this={ref} class={cn('[&_tr]:border-b', class_name)} {...rest}>
	{@render children?.()}
</thead>
