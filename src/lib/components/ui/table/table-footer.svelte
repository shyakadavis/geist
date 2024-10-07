<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLTableSectionElement>>;

	let { class: class_name = undefined, ref = $bindable(null), children, ...rest }: Props = $props();
</script>

<!-- TODO: Find a way to add space to the top of the because this `div` breaks the app. -->
<!-- <div aria-hidden="true" class="h-3"></div> -->
<tfoot bind:this={ref} class={cn('border-t font-medium text-gray-1000', class_name)} {...rest}>
	{@render children?.()}
</tfoot>
