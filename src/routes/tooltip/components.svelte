<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Spinner } from '$lib/components/ui/spinner';
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<Tooltip.Provider>
	<div class="flex items-center justify-around">
		<Tooltip.Root>
			<Tooltip.Trigger>
				{#snippet child({ props })}
					<Button {...props} size="sm">Bottom</Button>
				{/snippet}
			</Tooltip.Trigger>
			<Tooltip.Content side="bottom">The Evil Rabbit Jumped over the Fence.</Tooltip.Content>
		</Tooltip.Root>

		<Tooltip.Root>
			<Tooltip.Trigger>
				<Badge variant="gray" size="sm">LEFT</Badge>
			</Tooltip.Trigger>
			<Tooltip.Content side="left">The Evil Rabbit Jumped over the Fence.</Tooltip.Content>
		</Tooltip.Root>

		<Tooltip.Root>
			<Tooltip.Trigger>
				<Spinner />
			</Tooltip.Trigger>
			<Tooltip.Content side="right">The Evil Rabbit Jumped over the Fence.</Tooltip.Content>
		</Tooltip.Root>
	</div>
</Tooltip.Provider>
