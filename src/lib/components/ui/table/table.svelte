<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type $$Props = HTMLTableAttributes;

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<div class="relative w-full overflow-auto">
	<table class={cn('w-full caption-bottom text-sm text-gray-900', class_name)} {...rest}>
		{@render children?.()}
	</table>
</div>
