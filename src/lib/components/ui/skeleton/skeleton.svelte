<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		width?: number | string;
		height?: number | string;
		box_height?: number;
		show?: boolean;
		pill?: boolean;
		rounded?: boolean;
		squared?: boolean;
		animated?: boolean;
	};

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
	export let width: $$Props['width'] = undefined;
	export let height: $$Props['height'] = 24;
	export let box_height: $$Props['box_height'] = undefined;
	export let show: $$Props['show'] = true;
	export let pill: $$Props['pill'] = false;
	export let rounded: $$Props['rounded'] = false;
	export let squared: $$Props['squared'] = false;
	export let animated: $$Props['animated'] = true;
</script>

<span
	style:--width={typeof width === 'number' ? `${width}px` : width}
	style:--height={typeof height === 'number' ? `${height}px` : height}
	style:--box-height="{box_height}px"
	class={cn(
		'block rounded-md motion-reduce:animate-none',
		'animate-skeleton-loading bg-gradient-to-r from-accents-1 via-accents-2 to-accents-1 bg-[length:400%_100%]',
		'mb-[calc(var(--box-height)-var(--height))] min-h-[var(--height)] w-[var(--width)]',
		// TODO: If there is a way to apply class names to slots, it would save us the trouble of `[&>*]:after:` selectors
		{
			"relative [&>*]:pointer-events-none [&>*]:after:absolute [&>*]:after:inset-0 [&>*]:after:animate-skeleton-loading [&>*]:after:rounded-[4px] [&>*]:after:bg-gradient-to-r [&>*]:after:from-accents-1 [&>*]:after:via-accents-2 [&>*]:after:to-accents-1 [&>*]:after:bg-[length:400%_100%] [&>*]:after:content-['']":
				show
		},
		{
			'rounded-full': pill,
			'rounded-[50%]': rounded,
			'rounded-none': squared,
			'!animate-none [&>*]:after:!animate-none': !animated
		},
		class_name
	)}
	{...$$restProps}
>
	<slot></slot>
</span>
