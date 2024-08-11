<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import type { TooltipContentProps } from 'bits-ui';

	type Align = Exclude<TooltipContentProps['align'], undefined>;
	type Side = Exclude<TooltipContentProps['side'], undefined>;

	const tooltips: Record<Align, { side: Side; content: string }[]> = {
		start: [
			{ side: 'bottom', content: 'The Evil Rabbit Jumped over the Fence' },
			{ side: 'left', content: 'The Evil Rabbit Jumped over the Fence' },
			{ side: 'right', content: 'The Evil Rabbit Jumped over the Fence' }
		],
		center: [
			{ side: 'bottom', content: 'The Evil Rabbit Jumped over the Fence' },
			{ side: 'left', content: 'The Evil Rabbit Jumped over the Fence' },
			{ side: 'right', content: 'The Evil Rabbit Jumped over the Fence' }
		],
		end: [
			{ side: 'bottom', content: 'The Evil Rabbit Jumped over the Fence' },
			{ side: 'left', content: 'The Evil Rabbit Jumped over the Fence' },
			{ side: 'right', content: 'The Evil Rabbit Jumped over the Fence' }
		]
	} as const;

	const entries = Object.entries(tooltips) as [Align, { side: Side; content: string }[]][];
</script>

<div class="flex items-center justify-around">
	{#each entries as [align, tooltips]}
		<div class="grid">
			{#each tooltips as { side, content }}
				<Tooltip.Root>
					<Tooltip.Trigger class="capitalize">{side}/{align}</Tooltip.Trigger>
					<Tooltip.Content {side} {align}>
						<p>{content}</p>
					</Tooltip.Content>
				</Tooltip.Root>
			{/each}
		</div>
	{/each}
</div>
