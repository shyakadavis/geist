<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<Tooltip.Provider>
	<div class="flex items-center justify-around">
		<Tooltip.Root>
			<Tooltip.Trigger>No tip indicator</Tooltip.Trigger>
			<Tooltip.Content tip={false}>The Evil Rabbit Jumped over the Fence.</Tooltip.Content>
		</Tooltip.Root>

		<Tooltip.Root>
			<Tooltip.Trigger>No center text</Tooltip.Trigger>
			<Tooltip.Content class="text-start">
				The Evil Rabbit Jumped over the Fence multiple times.
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
</Tooltip.Provider>
