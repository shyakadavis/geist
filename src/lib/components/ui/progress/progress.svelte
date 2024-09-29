<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { progress_bar_variants, type Props } from '.';

	type $$Props = ProgressPrimitive.Props & Props;

	interface Props_1 { [key: string]: any }

	let {
		class: class_name = undefined,
		max = 100,
		value = undefined,
		variant = 'default',
		colors = undefined,
		...rest
	}: Props_1 = $props();
	


	function get_bg_color(colors: $$Props['colors'], value: $$Props['value']) {
		if (colors && typeof value === 'number') {
			const percentages = Object.keys(colors)
				.map(Number)
				.sort((a, b) => a - b);
			for (let i = percentages.length - 1; i >= 0; i--) {
				if (value >= percentages[i]) {
					return colors[percentages[i]];
				}
			}
		}
		return undefined;
	}
	let bar_bg_color = $derived(get_bg_color(colors, value));
</script>

<ProgressPrimitive.Root
	class={cn('relative h-2.5 w-full overflow-hidden rounded-full bg-gray-1000', class_name)}
	{...rest}
>
	<div
		class={cn(progress_bar_variants({ variant, className: class_name }), bar_bg_color)}
		style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}
	></div>
</ProgressPrimitive.Root>
