<script lang="ts">
	import { createBubbler } from 'svelte/legacy';
	const bubble = createBubbler();

	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<thead class={cn('[&_tr]:border-b', class_name)} {...rest} onclick={bubble('click')} onkeydown={bubble('keydown')}>
	{@render children?.()}
</thead>
