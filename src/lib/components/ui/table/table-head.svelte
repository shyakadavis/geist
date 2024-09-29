<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLThAttributes } from 'svelte/elements';

	type $$Props = HTMLThAttributes;

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<th
	class={cn(
		'h-12 border-gray-200 px-4 text-left align-middle font-medium last:text-right [&:has([role=checkbox])]:pr-0 [&_th]:border-b',
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</th>
