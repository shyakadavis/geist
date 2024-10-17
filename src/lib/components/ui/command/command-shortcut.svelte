<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLSpanElement>;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<span class={cn('ml-auto text-xs tracking-widest text-gray-900', class_name)} {...rest}>
	{@render children?.()}
</span>
