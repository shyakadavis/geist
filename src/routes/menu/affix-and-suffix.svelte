<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
</script>

<div class="flex gap-6">
	<Menu.Root>
		<Menu.Trigger>
			{#snippet child({ props })}
				<Button aria-label="Menu" shape="square" size="sm" svg_only variant="secondary" {...props}>
					<Icons.MoreHorizontal aria-hidden="true" />
				</Button>
			{/snippet}
		</Menu.Trigger>
		<Menu.Content>
			<Menu.Group>
				<Menu.Item affix={Icons.Accessibility}>Left</Menu.Item>
				<Menu.Item affix={Icons.Accessibility}>Center</Menu.Item>
				<Menu.Item affix={Icons.Accessibility}>Right</Menu.Item>
			</Menu.Group>
		</Menu.Content>
	</Menu.Root>

	<Menu.Root>
		<Menu.Trigger>
			{#snippet child({ props })}
				<Button {...props} aria-label="Menu" shape="square" size="sm" svg_only variant="secondary">
					<Icons.MoreHorizontal aria-hidden="true" />
				</Button>
			{/snippet}
		</Menu.Trigger>
		<Menu.Content>
			<Menu.Group>
				<Menu.Item suffix={Icons.Accessibility}>Left</Menu.Item>
				<Menu.Item suffix={Icons.Accessibility}>Center</Menu.Item>
				<Menu.Item suffix={Icons.Accessibility}>Right</Menu.Item>
			</Menu.Group>
		</Menu.Content>
	</Menu.Root>
</div>
