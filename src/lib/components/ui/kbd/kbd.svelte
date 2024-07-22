<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { type Props, kbd_variants, keys_map } from './index.js';

	type $$Props = Props;

	let class_name: string | undefined | null = undefined;
	export let size: $$Props['size'] = 'md';
	export let keys: (keyof typeof keys_map)[];
	export { class_name as class };
</script>

<kbd class={cn(kbd_variants({ size, className: class_name }))} {...$$restProps}>
	{#each keys as key, i}
		<span>{keys_map[key]}</span>
	{/each}
</kbd>
