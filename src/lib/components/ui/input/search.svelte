<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import Input from './input.svelte';

	type Props = HTMLInputAttributes & {
		ref?: HTMLInputElement;
	};

	// type Props = {
	// 	class?: string;
	// 	value?: string;
	// 	ref?: HTMLInputElement;
	// };

	let {
		class: class_name = undefined,
		value = $bindable(''),
		ref = $bindable(undefined),
		...rest
	}: Props = $props();

	// Automatically clear the input if escape is pressed.
	function key_down_handler(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			value = '';
		}
	}
</script>

<svelte:window onkeydown={key_down_handler} />

<div class={cn('bg-background-100', class_name)}>
	<Input
		type="search"
		affix={Icons.MagnifyingGlass}
		affix_styling={false}
		aria-labelledby="Search"
		bind:value
		bind:ref
		{...rest}
	/>
</div>
