<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>>;

	let { ref = $bindable(null), class: class_name, children, ...rest }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn('mt-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0', class_name)}
	{...rest}
>
	{@render children?.()}
</div>
