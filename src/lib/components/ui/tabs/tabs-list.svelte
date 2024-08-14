<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { onMount } from 'svelte';

	type $$Props = TabsPrimitive.ListProps & {
		variant?: 'default' | 'secondary';
		/** When `true`, masks either edge of the scrollable content to indicate there is more content to the user @default true */
		mask_overflow?: boolean;
	};

	let class_name: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export { class_name as class };
	export let mask_overflow: $$Props['mask_overflow'] = true;

	let el: HTMLDivElement;

	let pre_mask = false;
	let post_mask = false;

	// When the tabs are scrolled it will determine whether or not to show the mask at the end
	function handle_mask() {
		if (el.offsetWidth + el.scrollLeft < el.scrollWidth - 10) {
			post_mask = true;
		} else {
			post_mask = false;
		}

		if (el.scrollLeft == 0) {
			pre_mask = false;
		} else {
			pre_mask = true;
		}
	}

	onMount(() => {
		handle_mask(); // initially determine mask state
		el.addEventListener('scroll', handle_mask);

		return () => {
			el.removeEventListener('scroll', handle_mask);
		};
	});
</script>

<svelte:window on:resize={handle_mask} />

<!-- Make sure you have the `no-scrollbar` class in your tailwind.config file -->
<TabsPrimitive.List
	data-variant={variant}
	bind:el
	class={cn(
		'group flex w-full items-baseline gap-3 overflow-hidden overflow-x-auto p-1 text-gray-900 no-scrollbar data-[variant=default]:[box-shadow:_0_-1px_0_var(--accents-2)_inset;]',
		{
			'mask-linear mask-dir-to-r mask-from-0 mask-to-100 mask-point-to-[15%]':
				mask_overflow && pre_mask,
			'mask-linear mask-dir-to-l mask-from-0 mask-to-100 mask-point-to-[15%]':
				mask_overflow && post_mask
		},
		class_name
	)}
	{...$$restProps}
>
	<slot></slot>
</TabsPrimitive.List>
