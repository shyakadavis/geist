<script lang="ts">
	import { cn, type PrimitiveTdAttributes } from '$lib/utils.js';

	type Props = PrimitiveTdAttributes;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<td
	bind:this={ref}
	class={cn('px-2 py-2.5 align-middle last:text-right [&:has([role=checkbox])]:pr-0', class_name)}
	{...rest}
>
	{@render children?.()}
</td>
