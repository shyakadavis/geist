<script lang="ts">
	import { createBubbler } from 'svelte/legacy';
	const bubble = createBubbler();

	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableRowElement> & {
		'data-state'?: unknown;
	};

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<tr
	class={cn(
		'transition-colors data-[state=selected]:bg-background-200 odd:group-data-[striped=true]:bg-background-200 group-data-[interactive=true]:hover:bg-gray-100',
		class_name
	)}
	{...rest}
	onclick={bubble('click')}
	onkeydown={bubble('keydown')}
>
	{@render children?.()}
</tr>
