<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { progress_bar_variants, type Variant } from '.';

	type Props = ProgressPrimitive.RootProps & {
		variant?: Variant;
		colors?: Record<number, string>;
	};

	let {
		class: class_name = undefined,
		max = 100,
		value = undefined,
		variant = 'default',
		colors = undefined,
		...rest
	}: Props = $props();

	function get_bg_color(c: typeof colors, v: typeof value) {
		if (c && typeof v === 'number') {
			const percentages = Object.keys(c)
				.map(Number)
				.sort((a, b) => a - b);
			for (let i = percentages.length - 1; i >= 0; i--) {
				if (v >= percentages[i]) {
					return c[percentages[i]];
				}
			}
		}
		return undefined;
	}

	let bar_bg_color = $derived(get_bg_color(colors, value));
</script>

<ProgressPrimitive.Root
	class={cn('relative h-2.5 w-full overflow-hidden rounded-full bg-gray-200', class_name)}
	{...rest}
>
	<div
		class={cn(progress_bar_variants({ variant }), bar_bg_color, class_name)}
		style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}
	></div>
</ProgressPrimitive.Root>
