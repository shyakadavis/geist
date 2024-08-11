<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';

	const tooltips = [
		{ side: 'top', content: 'The Evil Rabbit Jumped over the Fence' },
		{ side: 'bottom', content: 'The Evil Rabbit Jumped over the Fence' },
		{ side: 'left', content: 'The Evil Rabbit Jumped over the Fence' },
		{ side: 'right', content: 'The Evil Rabbit Jumped over the Fence' }
	] as const;
</script>

<div class="flex items-center justify-around">
	{#each tooltips as { side, content }}
		<Tooltip.Root>
			<Tooltip.Trigger class="capitalize">{side}</Tooltip.Trigger>
			<Tooltip.Content {side}>
				<p>{content}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>
