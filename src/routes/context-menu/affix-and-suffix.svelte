<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import * as ContextMenu from '$lib/components/ui/context-menu';
</script>

<!-- TODO: Just noticed a bug (maybe?) in this demo. You can open 2 context menus at once. That's wrong, right? -->
<div class="flex gap-6">
	<ContextMenu.Root>
		<ContextMenu.Trigger
			class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
		>
			Right click
		</ContextMenu.Trigger>
		<ContextMenu.Content>
			<ContextMenu.Item affix={Icons.LogoVercelCircle}>Item one</ContextMenu.Item>
			<ContextMenu.Item affix={Icons.LogoVercelCircle}>Item two</ContextMenu.Item>
			<ContextMenu.Item affix={Icons.LogoVercelCircle}>Item three</ContextMenu.Item>
			<ContextMenu.Item affix={Icons.LogoVercelCircle}>Item four</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Root>

	<ContextMenu.Root>
		<ContextMenu.Trigger
			class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
		>
			Right click
		</ContextMenu.Trigger>
		<ContextMenu.Content>
			<ContextMenu.Item suffix={Icons.LogoVercelCircle}>Item one</ContextMenu.Item>
			<ContextMenu.Item suffix={Icons.LogoVercelCircle}>Item two</ContextMenu.Item>
			<ContextMenu.Item suffix={Icons.LogoVercelCircle}>Item three</ContextMenu.Item>
			<ContextMenu.Item suffix={Icons.LogoVercelCircle}>Item four</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Root>
</div>
