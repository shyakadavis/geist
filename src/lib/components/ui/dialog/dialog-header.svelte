<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement>;

	let { class: class_name = undefined, children, ...rest }: Props = $props();
</script>

<div class={cn('flex flex-col space-y-1.5 text-center sm:text-left', class_name)} {...rest}>
	{@render children?.()}
</div>
