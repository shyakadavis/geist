<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<div
	class={cn('mt-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0', class_name)}
	{...$$restProps}
>
	<slot />
</div>
