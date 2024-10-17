<script lang="ts">
	import * as ContextMenu from '$lib/components/ui/context-menu';
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger
		class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
	>
		Right click
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item>Item one</ContextMenu.Item>
		<ContextMenu.Item>Item two</ContextMenu.Item>
		<ContextMenu.Item>Item three</ContextMenu.Item>
		<ContextMenu.Item>Item four</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
