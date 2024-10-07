<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLSpanElement>>;

	let { ref = $bindable(null), class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<span
	bind:this={ref}
	class={cn('ml-auto text-xs tracking-widest opacity-60', class_name)}
	{...rest}
>
	{@render children?.()}
</span>
