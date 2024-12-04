<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLThAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLThAttributes>;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<th
	bind:this={ref}
	class={cn(
		'h-12 border-gray-200 px-4 text-left align-middle font-medium last:text-right [&:has([role=checkbox])]:pr-0 [&_th]:border-b',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</th>
