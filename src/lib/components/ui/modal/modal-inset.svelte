<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		class?: string;
	};
	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<div class={cn('flex flex-col gap-2 bg-accents-1 p-6', class_name)}>
	<slot></slot>
</div>
