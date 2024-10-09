<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import { command_open_state } from '$lib/stores';
	import { cn } from '$lib/utils';
	import { Command, Dialog } from 'bits-ui';
	import { MediaQuery } from 'runed';
	import CommandInput from './command-input.svelte';
	import CommandList from './command-list.svelte';

	const is_desktop = new MediaQuery('(min-width: 640px)');

	function doc_keydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			command_open_state.toggle();
		}
	}
</script>

<svelte:document onkeydown={doc_keydown} />

{#if is_desktop.matches}
	<Dialog.Root bind:open={$command_open_state}>
		<Dialog.Portal>
			<Dialog.Overlay
				class={cn(
					'fixed inset-0 z-50 bg-background-100/80',
					// open animation
					'data-[state=open]:animate-in data-[state=open]:fade-in-0',
					// close animation
					'data-[state=closed]:animate-out data-[state=closed]:fade-out-0'
				)}
			/>
			<Dialog.Content
				class={cn(
					'fixed left-[50%] top-[50%] z-50 w-full max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background-100 shadow-lg outline-none',
					// open animation
					'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
					// close animation
					'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]'
				)}
			>
				<Command.Root
					class="flex h-full w-full flex-col self-start overflow-hidden rounded-xl border bg-background-100"
				>
					<CommandInput class="h-[53px]" />
					<CommandList class="h-[436px]" />
				</Command.Root>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open={$command_open_state}>
		<Drawer.Content preventScroll class="h-3/4" hide_dismiss_bar>
			<Command.Root>
				<Drawer.Header class="flex h-[53px] items-center justify-between px-2">
					<CommandInput class="h-7" />
					<Button
						onclick={command_open_state.toggle}
						size="sm"
						variant="secondary"
						class="h-5 px-1.5 text-xs"
					>
						Esc
					</Button>
				</Drawer.Header>
				<CommandList class="h-[70dvh]" />
			</Command.Root>
		</Drawer.Content>
	</Drawer.Root>
{/if}
