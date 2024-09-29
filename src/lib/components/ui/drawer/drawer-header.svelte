<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
	};

	let { ref = $bindable(null), class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<div bind:this={ref} class={cn('grid gap-1.5 p-4 text-center sm:text-left', class_name)} {...rest}>
	{@render children?.()}
</div>
