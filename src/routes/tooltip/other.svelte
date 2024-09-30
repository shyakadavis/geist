<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<Tooltip.Provider>
	<div class="flex items-center justify-around">
		<Tooltip.Root>
			<Tooltip.Trigger>No tip indicator</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content tip={false}>The Evil Rabbit Jumped over the Fence.</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>

		<Tooltip.Root>
			<Tooltip.Trigger>No center text</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content class="text-start">
					The Evil Rabbit Jumped over the Fence multiple times.
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</div>
</Tooltip.Provider>
