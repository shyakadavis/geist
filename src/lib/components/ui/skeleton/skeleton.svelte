<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		width?: number;
		height?: number;
		box_height?: number;
		show?: boolean;
	};

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
	export let width: $$Props['width'] = undefined;
	export let height: $$Props['height'] = 24;
	export let box_height: $$Props['box_height'] = undefined;
	export let show: $$Props['show'] = true;
</script>

<span
	style:--width="{width}px"
	style:--height="{height}px"
	style:--box-height="{box_height}px"
	class={cn(
		'block w-fit rounded-md motion-reduce:animate-none',
		'skeleton_loading bg-gradient-to-r from-accents-1 via-accents-2 to-accents-1 bg-[length:400%_100%]',
		'mb-[calc(var(--box-height)-var(--height))] min-h-[var(--height)] w-[var(--width)]',
		// TODO: If there is a way to apply class names to slots, it would save us the trouble of `[&>*]:after:` selectors
		{
			"[&>*]:after:skeleton_loading_pseudo relative [&>*]:pointer-events-none [&>*]:after:absolute [&>*]:after:inset-0 [&>*]:after:rounded-[4px] [&>*]:after:bg-gradient-to-r [&>*]:after:from-accents-1 [&>*]:after:via-accents-2 [&>*]:after:to-accents-1 [&>*]:after:bg-[length:400%_100%] [&>*]:after:content-['']":
				show
		},
		class_name
	)}
	{...$$restProps}
>
	<slot></slot>
</span>

<style>
	.skeleton_loading {
		animation: skeleton_loading 8s ease-in-out infinite;
	}

	@keyframes skeleton_loading {
		0% {
			background-position: 200% 0;
		}
		to {
			background-position: -200% 0;
		}
	}
</style>
