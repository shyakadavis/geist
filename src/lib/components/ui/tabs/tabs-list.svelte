<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { onMount } from 'svelte';

	type $$Props = TabsPrimitive.ListProps & {
		variant?: 'default' | 'secondary';
	};

	let class_name: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export { class_name as class };

	let el: HTMLDivElement;

	let preBlur = false;
	let postBlur = false;

	// When the tabs are scrolled it will determine whether or not to show the blur at the end
	const handle_blur = () => {
		if (el.offsetWidth + el.scrollLeft < el.scrollWidth) {
			postBlur = true;
		} else {
			postBlur = false;
		}

		if (el.scrollLeft == 0) {
			preBlur = false;
		} else {
			preBlur = true;
		}
	};

	onMount(() => {
		handle_blur(); // initially determine blur state
	});
</script>

<svelte:window on:scroll={handle_blur} on:resize={handle_blur}/>

<!-- Make sure you have the `no-scrollbar` class in your tailwind.config file -->

<TabsPrimitive.List
	data-variant={variant}
	bind:el
	class={cn(
		'group flex w-full items-baseline gap-3 overflow-hidden overflow-x-auto p-1 text-gray-900 no-scrollbar data-[variant=default]:[box-shadow:_0_-1px_0_var(--accents-2)_inset;]',
		class_name
	)}
	{...$$restProps}
>
	{#if preBlur}
		<span class="absolute left-4 h-10 w-8 bg-gray-100 bg-opacity-80 blur-lg"></span>
	{/if}
	<slot />
	<!-- This indicates to the user that there is more content -->
	{#if postBlur}
		<span class="absolute right-4 h-10 w-8 bg-gray-100 bg-opacity-80 blur-lg"></span>
	{/if}
</TabsPrimitive.List>
