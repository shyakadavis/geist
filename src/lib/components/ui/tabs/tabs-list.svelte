<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	type $$Props = TabsPrimitive.ListProps & {
		variant?: 'default' | 'secondary';
		/** When true blurs either edge of the scrollable content to indicate there is more content to the user @default true */
		blur_overflow?: boolean;
	};

	let class_name: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export { class_name as class };
	export let blur_overflow: $$Props['blur_overflow'] = false;

	let el: HTMLDivElement;

	let preBlur = false;
	let postBlur = false;

	// When the tabs are scrolled it will determine whether or not to show the blur at the end
	const handle_blur = () => {
		if (el.offsetWidth + el.scrollLeft < el.scrollWidth - 10) {
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
		el.addEventListener('scroll', handle_blur);

		return () => {
			el.removeEventListener('scroll', handle_blur);
		};
	});
</script>

<svelte:window on:resize={handle_blur} />

<!-- Make sure you have the `no-scrollbar` class in your tailwind.config file -->

<div class="relative">
	<TabsPrimitive.List
		data-variant={variant}
		bind:el
		class={cn(
			'group flex w-full items-baseline gap-3 overflow-hidden overflow-x-auto p-1 text-gray-900 no-scrollbar data-[variant=default]:[box-shadow:_0_-1px_0_var(--accents-2)_inset;]',
			class_name
		)}
		{...$$restProps}
	>
		{#if preBlur && blur_overflow}
			<span
				in:fade={{ duration: 50 }}
				out:fade={{ duration: 50 }}
				class="pointer-events-none absolute left-0 top-0 z-[1] h-full w-8 bg-gray-100 bg-opacity-80 blur-lg dark:bg-gray-200"
			></span>
		{/if}
		<slot />
		<!-- This indicates to the user that there is more content -->
		{#if postBlur && blur_overflow}
			<span
				in:fade={{ duration: 50 }}
				out:fade={{ duration: 50 }}
				class="pointer-events-none absolute right-0 top-0 z-[1] h-full w-8 bg-gray-100 bg-opacity-80 blur-lg dark:bg-gray-200"
			></span>
		{/if}
	</TabsPrimitive.List>
</div>
