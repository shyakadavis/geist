<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import Input from './input.svelte';

	type $$Props = HTMLInputAttributes & {
		el?: HTMLInputElement;
	};

	let class_name: string | undefined | null = undefined;
	export { class_name as class };
	export let value: string = '';
	export let el: $$Props['el'] = undefined;

	// Automatically clear the input if escape is pressed.
	function key_down_handler(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			value = '';
		}
	}
</script>

<svelte:window on:keydown={key_down_handler} />

<div class={cn('bg-background-100', class_name)}>
	<Input
		type="search"
		affix={Icons.MagnifyingGlass}
		affix_styling={false}
		aria-labelledby="Search"
		bind:value
		bind:el
		{...$$restProps}
	/>
</div>
