<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<caption class={cn('mt-4 text-sm', class_name)} {...$$restProps}>
	<slot />
</caption>
