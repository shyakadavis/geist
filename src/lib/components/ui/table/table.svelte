<script lang="ts">
	import { cn, type PrimitiveTableAttributes } from '$lib/utils.js';

	type Props = PrimitiveTableAttributes;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<div class="relative w-full overflow-auto">
	<table
		bind:this={ref}
		class={cn('w-full caption-bottom text-sm text-gray-900', class_name)}
		{...rest}
	>
		{@render children?.()}
	</table>
</div>
