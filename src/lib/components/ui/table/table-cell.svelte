<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLTdAttributes } from 'svelte/elements';

	type $$Props = HTMLTdAttributes;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<td
	class={cn('px-2 py-2.5 align-middle last:text-right [&:has([role=checkbox])]:pr-0', class_name)}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</td>
