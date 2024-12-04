<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type Props = TabsPrimitive.ListProps & {
		variant?: 'default' | 'secondary';
		/** When `true`, masks either edge of the scrollable content to indicate there is more content to the user @default true */
		mask_overflow?: boolean;
	};

	let {
		class: class_name = undefined,
		variant = 'default',
		mask_overflow = true,
		children,
		...rest
	}: Props = $props();

	let ref: HTMLDivElement | null = $state(null);

	let pre_mask = $state(false);
	let post_mask = $state(false);

	// When the tabs are scrolled it will determine whether or not to show the mask at the end
	function handle_mask() {
		if (!ref) return;
		if (ref.offsetWidth + ref.scrollLeft < ref.scrollWidth - 10) {
			post_mask = true;
		} else {
			post_mask = false;
		}

		if (ref.scrollLeft == 0) {
			pre_mask = false;
		} else {
			pre_mask = true;
		}
	}

	$effect(() => {
		if (!ref) return;
		handle_mask(); // initially determine mask state
		ref.addEventListener('scroll', handle_mask);

		return () => {
			ref?.removeEventListener('scroll', handle_mask);
		};
	});
</script>

<svelte:window onresize={handle_mask} />

<!-- Make sure you have the `no-scrollbar` class in your tailwind.config file -->
<TabsPrimitive.List
	data-variant={variant}
	bind:ref
	class={cn(
		'group flex w-full items-baseline gap-3 overflow-hidden overflow-x-auto p-1 text-gray-900 no-scrollbar data-[variant=default]:border-b data-[variant=default]:[box-shadow:_0_-1px_0_var(--accents-2)_inset;]',
		{
			'mask-linear mask-dir-to-r mask-from-0 mask-to-100 mask-point-to-[15%]':
				mask_overflow && pre_mask,
			'mask-linear mask-dir-to-l mask-from-0 mask-to-100 mask-point-to-[15%]':
				mask_overflow && post_mask
		},
		class_name
	)}
	{...rest}
>
	{@render children?.()}
</TabsPrimitive.List>
