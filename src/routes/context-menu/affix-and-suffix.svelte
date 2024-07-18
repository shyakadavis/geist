<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import {
		ContextMenu,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuTrigger
	} from '$lib/components/ui/context-menu';
</script>

<!-- TODO: Just noticed a bug (maybe?) in this demo. You can open 2 context menus at once. That's wrong, right? -->
<div class="flex gap-6">
	<ContextMenu>
		<ContextMenuTrigger
			class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
		>
			Right click
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem affix={Icons.LogoVercelCircle}>Item one</ContextMenuItem>
			<ContextMenuItem affix={Icons.LogoVercelCircle}>Item two</ContextMenuItem>
			<ContextMenuItem affix={Icons.LogoVercelCircle}>Item three</ContextMenuItem>
			<ContextMenuItem affix={Icons.LogoVercelCircle}>Item four</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>

	<ContextMenu>
		<ContextMenuTrigger
			class="w-[300px] rounded border border-dashed border-gray-alpha-600 py-[45px] text-center text-sm"
		>
			Right click
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem suffix={Icons.LogoVercelCircle}>Item one</ContextMenuItem>
			<ContextMenuItem suffix={Icons.LogoVercelCircle}>Item two</ContextMenuItem>
			<ContextMenuItem suffix={Icons.LogoVercelCircle}>Item three</ContextMenuItem>
			<ContextMenuItem suffix={Icons.LogoVercelCircle}>Item four</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</div>
