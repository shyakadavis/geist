<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';

	const sides = ['top', 'bottom', 'left', 'right'] as const;
</script>

<Tooltip.Provider>
	<div class="flex items-center justify-around">
		{#each sides as side}
			<Tooltip.Root>
				<Tooltip.Trigger class="capitalize">{side}</Tooltip.Trigger>
				<Tooltip.Content {side}>
					The <b>Evil Rabbit</b> Jumped over the <i>Fence</i>.
				</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</div>
</Tooltip.Provider>
