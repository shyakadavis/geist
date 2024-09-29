<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		class?: string;
	};
	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
	}

	let { class: class_name = undefined, children }: Props = $props();
	
</script>

<div class={cn('flex flex-col gap-2 bg-accents-1 p-6', class_name)}>
	{@render children?.()}
</div>
