<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	interface Props { [key: string]: any }

	let { class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<span class={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...rest}>
	{@render children?.()}
</span>
