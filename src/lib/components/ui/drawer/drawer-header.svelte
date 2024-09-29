<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		el?: HTMLDivElement;
	};
	interface Props { [key: string]: any }

	let { el = $bindable(undefined), class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<div
	bind:this={el}
	class={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
	{...rest}
>
	{@render children?.()}
</div>
