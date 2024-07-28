<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
</script>

<div class="flex gap-6">
	<Menu.Root>
		<Menu.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				aria-label="Menu"
				shape="square"
				size="sm"
				svg_only
				variant="secondary"
			>
				<Icons.MoreHorizontal aria-hidden="true" />
			</Button>
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
		<Menu.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				aria-label="Menu"
				shape="square"
				size="sm"
				svg_only
				variant="secondary"
			>
				<Icons.MoreHorizontal aria-hidden="true" />
			</Button>
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
