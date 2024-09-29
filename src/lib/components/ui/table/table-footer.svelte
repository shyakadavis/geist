<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement>;

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<div aria-hidden="true" class="h-3"></div>
<tfoot class={cn('border-t font-medium text-gray-1000', class_name)} {...rest}>
	{@render children?.()}
</tfoot>
