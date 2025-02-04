<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Drawer from '$lib/components/ui/drawer';
	import { aside_items } from '$lib/config/sitemap';
	import { command_open_state } from '$lib/stores';
	import { MediaQuery } from 'svelte/reactivity';

	const is_desktop = new MediaQuery('(min-width: 640px)');

	function doc_keydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			command_open_state.toggle();
		}
	}
</script>

<svelte:document onkeydown={doc_keydown} />

{#if is_desktop.current}
	<Command.Dialog bind:open={$command_open_state} close_button="esc" class="w-full max-w-[640px]">
		<Command.Input placeholder="Search..." class="h-[53px] px-2 text-lg" hide_search_icon />
		<Command.List class="h-[436px] max-h-none">
			{@render empty_command()}
			{@render command_items()}
		</Command.List>
	</Command.Dialog>
{:else}
	<Drawer.Root bind:open={$command_open_state}>
		<Drawer.Content preventScroll class="h-3/4" hide_dismiss_bar>
			<Command.Root>
				<Drawer.Header
					class="flex h-[53px] items-center justify-between border-b p-0 py-4 [&_[data-command-input-wrapper]]:w-full [&_[data-command-input-wrapper]]:border-b-0"
				>
					<Command.Input placeholder="Search..." class="h-7 w-full text-base" hide_search_icon />
					<Button
						onclick={command_open_state.toggle}
						size="sm"
						variant="secondary"
						class="mr-2 h-5 px-1.5 text-xs"
					>
						Esc
					</Button>
				</Drawer.Header>
				<Command.List class="max-h-none">
					{@render empty_command()}
					{@render command_items()}
				</Command.List>
			</Command.Root>
		</Drawer.Content>
	</Drawer.Root>
{/if}

{#snippet empty_command()}
	<Command.Empty class="flex w-full items-center justify-center pb-6 pt-8 text-sm text-gray-700">
		No results found.
	</Command.Empty>
{/snippet}

{#snippet command_items()}
	{#each Object.entries(aside_items) as item}
		{@const [group, links] = item}
		<Command.Group heading={group} class="capitalize">
			{#each links as link}
				{@const disabled = link.status == 'soon'}
				<Command.LinkItem
					href={link.href}
					{disabled}
					value={link.title}
					onclick={command_open_state.toggle}
					class="h-10 gap-2 data-[selected]:rounded-lg"
				>
					{#if link.icon}
						{@const Icon = link.icon}
						<span class="text-gray-1000">
							<Icon aria-hidden="true" width="16" height="16" />
						</span>
					{:else}
						<span class="text-gray-1000">
							<Icons.ArrowRight width="16" height="16" class="text-gray-600" aria-hidden="true" />
						</span>
					{/if}
					<span>{link.title}</span>
					{#if link.status === 'new'}
						<Badge variant="blue" size="sm">New</Badge>
					{/if}
					{#if link.status === 'soon'}
						<Badge variant="gray-subtle" size="sm">Soon</Badge>
					{/if}
					{#if link.status === 'draft'}
						<Badge variant="purple-subtle" size="sm">Draft</Badge>
					{/if}
				</Command.LinkItem>
			{/each}
		</Command.Group>
	{/each}
{/snippet}
