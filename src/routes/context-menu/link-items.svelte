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
		<ContextMenuItem href="https://shyakadavis.me/" target="_blank" rel="noopener noreferrer">
			Item one
		</ContextMenuItem>
		<ContextMenuItem href="https://hj.run/" target="_blank" rel="noopener noreferrer">
			Item two
		</ContextMenuItem>
		<ContextMenuItem
			href="https://github.com/AdrianGonz97/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Item three
		</ContextMenuItem>
		<ContextMenuItem href="https://github.com/jeannemas/" target="_blank" rel="noopener noreferrer">
			Item four
		</ContextMenuItem>
	</ContextMenuContent>
</ContextMenu>
