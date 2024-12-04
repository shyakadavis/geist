<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLTableAttributes>;

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
