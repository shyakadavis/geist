<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTdAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLTdAttributes>;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<td
	bind:this={ref}
	class={cn('px-2 py-2.5 align-middle last:text-right [&:has([role=checkbox])]:pr-0', class_name)}
	{...rest}
>
	{@render children?.()}
</td>
