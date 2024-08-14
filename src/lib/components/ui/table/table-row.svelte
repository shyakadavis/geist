<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableRowElement> & {
		'data-state'?: unknown;
	};

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<tr
	class={cn(
		'transition-colors data-[state=selected]:bg-background-200 odd:group-data-[striped=true]:bg-background-200 group-data-[interactive=true]:hover:bg-gray-100',
		class_name
	)}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</tr>
