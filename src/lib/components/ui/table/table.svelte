<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type $$Props = HTMLTableAttributes;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<div class="relative w-full overflow-auto">
	<table class={cn('w-full caption-bottom text-sm text-gray-900', class_name)} {...$$restProps}>
		<slot />
	</table>
</div>
