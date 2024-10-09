<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { kbd_variants, keys_map, type Size } from './index.js';

	type Props = {
		class?: string;
		size?: Size;
		keys: (keyof typeof keys_map)[];
	};

	let { class: class_name = undefined, size = 'md', keys, ...rest }: Props = $props();
</script>

<kbd class={cn(kbd_variants({ size, className: class_name }))} {...rest}>
	{#each keys as key}
		<span>{keys_map[key]}</span>
	{/each}
</kbd>
