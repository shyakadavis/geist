<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import { aside_items } from '$lib/config/sitemap';
	import { command_open_state } from '$lib/stores';
	import { cn } from '$lib/utils';
	import { Command, Dialog } from 'bits-ui';
	import { MediaQuery } from 'runed';
	import CommandList from './command-list.svelte';

	const is_desktop = new MediaQuery('(min-width: 640px)');

	function doc_keydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			command_open_state.toggle();
		}
	}

	let search = $state('');
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
					class="flex h-full w-full flex-col divide-y divide-gray-400 self-start overflow-hidden rounded-xl border bg-background-100"
				>
					<Command.Input
						class="inline-flex h-[53px] w-full truncate rounded-[inherit] bg-transparent px-4 text-lg transition-colors placeholder:text-gray-700 focus:outline-none focus:ring-0"
						placeholder="Search..."
					/>
					<Command.List class="h-[436px] overflow-y-auto overflow-x-hidden px-2 pb-2">
						<Command.Viewport>
							<Command.Empty
								class="flex w-full items-center justify-center pb-6 pt-8 text-sm text-gray-700"
							>
								No results found.
							</Command.Empty>
							{#each Object.entries(aside_items) as item}
								{@const [group, links] = item}
								<Command.Group>
									<Command.GroupHeading
										class="px-3 pb-2 pt-4 text-xs font-medium capitalize text-gray-700"
									>
										{group}
									</Command.GroupHeading>
									<Command.GroupItems>
										{#each links as link}
											{@const disabled = link.status == 'soon'}
											<Command.Item
												onSelect={command_open_state.toggle}
												{disabled}
												value={link.title}
												class={cn(
													'flex h-10 cursor-pointer select-none items-center gap-2 px-3 py-2.5 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-gray-alpha-100',
													// disabled
													'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
												)}
											>
												{#snippet child({ props })}
													<a href={disabled ? undefined : link.href} {...props}>
														{#if link.icon}
															{@const Icon = link.icon}
															<span class="text-gray-1000">
																<Icon aria-hidden="true" width="16" height="16" />
															</span>
														{:else}
															<span class="text-gray-1000">
																<Icons.ArrowRight
																	width="16"
																	height="16"
																	class="text-gray-600"
																	aria-hidden="true"
																/>
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
													</a>
												{/snippet}
											</Command.Item>
										{/each}
									</Command.GroupItems>
								</Command.Group>
							{/each}
						</Command.Viewport>
					</Command.List>
				</Command.Root>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open={$command_open_state}>
		<Drawer.Content class="h-3/4" hide_dismiss_bar>
			<Command.Root>
				<Drawer.Header class="flex h-[53px] items-center justify-between border-b px-2">
					<!-- <Command.Input
						hide_search_icon
						placeholder="Search..."
						class="h-7 flex-grow border-none text-lg"
						bind:value={search}
						wrapper_class="border-none w-full flex items-center"
					/> -->
					<Button
						onclick={command_open_state.toggle}
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
