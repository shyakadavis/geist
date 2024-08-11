<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<div class="flex items-center justify-around">
	<Tooltip.Root>
		<Tooltip.Trigger asChild let:builder>
			<Button builders={[builder]} size="sm">Bottom</Button>
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
			<Icons.LoaderCircle class="size-4 animate-spin" />
		</Tooltip.Trigger>
		<Tooltip.Content side="right">The Evil Rabbit Jumped over the Fence.</Tooltip.Content>
	</Tooltip.Root>
</div>
