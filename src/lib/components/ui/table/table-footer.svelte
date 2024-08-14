<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
</script>

<div aria-hidden="true" class="h-3"></div>
<tfoot class={cn('border-t font-medium text-gray-1000', class_name)} {...$$restProps}>
	<slot />
</tfoot>
