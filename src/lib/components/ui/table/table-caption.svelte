<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLElement>>;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<caption bind:this={ref} class={cn('mt-4 text-sm', class_name)} {...rest}>
	{@render children?.()}
</caption>
