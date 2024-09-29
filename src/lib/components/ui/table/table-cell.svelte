<script lang="ts">
	import { createBubbler } from 'svelte/legacy';
	const bubble = createBubbler();

	import { cn } from '$lib/utils.js';
	import type { HTMLTdAttributes } from 'svelte/elements';

	type $$Props = HTMLTdAttributes;

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<td
	class={cn('px-2 py-2.5 align-middle last:text-right [&:has([role=checkbox])]:pr-0', class_name)}
	{...rest}
	onclick={bubble('click')}
	onkeydown={bubble('keydown')}
>
	{@render children?.()}
</td>
