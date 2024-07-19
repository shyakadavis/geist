<script lang="ts">
	import {
		ContextMenu,
		ContextMenuCheckboxItem,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuLabel,
		ContextMenuRadioGroup,
		ContextMenuRadioItem,
		ContextMenuSeparator,
		ContextMenuShortcut,
		ContextMenuSub,
		ContextMenuSubContent,
		ContextMenuSubTrigger,
		ContextMenuTrigger
	} from '$lib/components/ui/context-menu';

	let show_bookmarks = false;
	let show_full_urls = true;

	let value = 'huntabyte';
</script>

<ContextMenu>
	<ContextMenuTrigger
		class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
	>
		Right click here
	</ContextMenuTrigger>
	<ContextMenuContent class="w-64">
		<ContextMenuItem inset>
			Back
			<ContextMenuShortcut>⌘[</ContextMenuShortcut>
		</ContextMenuItem>
		<ContextMenuItem inset>
			Forward
			<ContextMenuShortcut>⌘]</ContextMenuShortcut>
		</ContextMenuItem>
		<ContextMenuItem inset>
			Reload
			<ContextMenuShortcut>⌘R</ContextMenuShortcut>
		</ContextMenuItem>
		<ContextMenuSub>
			<ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
			<ContextMenuSubContent class="w-48">
				<ContextMenuItem>
					Save Page As...
					<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>Create Shortcut...</ContextMenuItem>
				<ContextMenuItem>Name Window...</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>Developer Tools</ContextMenuItem>
			</ContextMenuSubContent>
		</ContextMenuSub>
		<ContextMenuSeparator />
		<ContextMenuCheckboxItem bind:checked={show_bookmarks}>
			Show Bookmarks Bar
			<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
		</ContextMenuCheckboxItem>
		<ContextMenuCheckboxItem bind:checked={show_full_urls}>Show Full URLs</ContextMenuCheckboxItem>
		<ContextMenuSeparator />
		<ContextMenuRadioGroup bind:value>
			<ContextMenuLabel inset>People</ContextMenuLabel>
			<ContextMenuSeparator />
			<ContextMenuRadioItem value="shyaka">SHYAKA Davis</ContextMenuRadioItem>
			<ContextMenuRadioItem value="huntabyte">Hunter Johnston</ContextMenuRadioItem>
		</ContextMenuRadioGroup>
	</ContextMenuContent>
</ContextMenu>
