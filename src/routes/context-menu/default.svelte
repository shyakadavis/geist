<script lang="ts">
	import {
		ContextMenu,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuTrigger
	} from '$lib/components/ui/context-menu';
</script>

<ContextMenu>
	<ContextMenuTrigger
		class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
	>
		Right click
	</ContextMenuTrigger>
	<ContextMenuContent>
		<ContextMenuItem>Item one</ContextMenuItem>
		<ContextMenuItem>Item two</ContextMenuItem>
		<ContextMenuItem>Item three</ContextMenuItem>
		<ContextMenuItem>Item four</ContextMenuItem>
	</ContextMenuContent>
</ContextMenu>
