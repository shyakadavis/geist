<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import CommandList from './command-list.svelte';
	import { command_open_state } from '$lib/stores';
	import * as Command from '$lib/components/ui/command';
	import { Button } from '$lib/components/ui/button';

	const is_desktop = mediaQuery('(min-width: 640px)');

	let search = '';
</script>

{#if $is_desktop}
	<Command.Dialog
		bind:open={$command_open_state}
		class="p-0"
		dialog_content_class_name="!max-w-[640px] w-full"
	>
		<Command.Input
			placeholder="Search..."
			hideSearchIcon
			bind:value={search}
			class="h-[53px] p-0 px-1 text-lg placeholder:text-gray-600"
		/>
		<CommandList {search} />
	</Command.Dialog>
{:else}
	<Drawer.Root bind:open={$command_open_state}>
		<Drawer.Content class="h-3/4 bg-background-100 p-0">
			<Command.Root>
				<Drawer.Header class="flex h-[53px] place-items-center justify-between border-b px-2">
					<Command.Input
						hideSearchIcon
						placeholder="Search..."
						class="h-7 flex-grow border-none text-lg placeholder:text-gray-600"
						bind:value={search}
						wrapperClass="border-none w-full flex place-items-center"
					/>
					<Button
						on:click={command_open_state.toggle}
						size="sm"
						variant="secondary"
						class="h-5 px-1.5 text-xs"
					>
						Esc
					</Button>
				</Drawer.Header>
				<CommandList {search} style="height: calc(74svh - 53px);" />
			</Command.Root>
		</Drawer.Content>
	</Drawer.Root>
{/if}
