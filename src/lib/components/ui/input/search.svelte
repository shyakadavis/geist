<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import Input, { type InputProps } from './input.svelte';

	type Props = Omit<InputProps, 'type' | 'affix' | 'affix_styling'>;

	let {
		class: class_name = undefined,
		value = $bindable(''),
		ref = $bindable(null),
		'aria-labelledby': aria_labelledby = 'Search',
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
		aria-labelledby={aria_labelledby}
		bind:value
		bind:ref
		{...rest}
	/>
</div>
