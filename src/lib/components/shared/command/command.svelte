<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { command_open_state } from '$lib/stores';
	import { mediaQuery } from 'svelte-legos';
	import CommandList from './command-list.svelte';

	function doc_keydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			command_open_state.toggle();
		}
	}

	const is_desktop = mediaQuery('(min-width: 640px)');

	let search = '';
</script>

<svelte:document on:keydown={doc_keydown} />

{#if $is_desktop}
	<Command.Dialog
		bind:open={$command_open_state}
		class="max-w-[640px] sm:rounded-xl"
		close_button="esc"
	>
		<Command.Input
			placeholder="Search..."
			hide_search_icon
			bind:value={search}
			class="h-[53px] p-0 px-1 text-lg"
		/>
		<CommandList {search} class="h-[436px] max-h-none" />
	</Command.Dialog>
{:else}
	<Drawer.Root bind:open={$command_open_state}>
		<Drawer.Content class="h-3/4" hide_dismiss_bar>
			<Command.Root>
				<Drawer.Header class="flex h-[53px] items-center justify-between border-b px-2">
					<Command.Input
						hide_search_icon
						placeholder="Search..."
						class="h-7 flex-grow border-none text-lg"
						bind:value={search}
						wrapper_class="border-none w-full flex items-center"
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
				<CommandList {search} class="max-h-full" />
			</Command.Root>
		</Drawer.Content>
	</Drawer.Root>
{/if}
