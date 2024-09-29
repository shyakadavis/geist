<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

	interface Props { [key: string]: any }

	let { class: class_name = undefined, children, ...rest }: Props = $props();
	
</script>

<caption class={cn('mt-4 text-sm', class_name)} {...rest}>
	{@render children?.()}
</caption>
