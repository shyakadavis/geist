<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLThAttributes } from 'svelte/elements';

	type $$Props = HTMLThAttributes;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<th
	class={cn(
		'h-12 border-gray-200 px-4 text-left align-middle font-medium last:text-right [&:has([role=checkbox])]:pr-0 [&_th]:border-b',
		class_name
	)}
	{...$$restProps}
>
	<slot />
</th>
