<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { progress_bar_variants, type Props } from '.';

	type $$Props = ProgressPrimitive.Props & Props;

	let class_name: $$Props['class'] = undefined;
	export let max: $$Props['max'] = 100;
	export let value: $$Props['value'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let colors: $$Props['colors'] = undefined;
	export { class_name as class };

	$: bar_bg_color = get_bg_color(colors, value);

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
</script>

<ProgressPrimitive.Root
	class={cn('relative h-2.5 w-full overflow-hidden rounded-full bg-gray-1000', class_name)}
	{...$$restProps}
>
	<div
		class={cn(progress_bar_variants({ variant, className: class_name }), bar_bg_color)}
		style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}
	></div>
</ProgressPrimitive.Root>
