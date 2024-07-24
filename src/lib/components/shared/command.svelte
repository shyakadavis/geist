<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Icons } from '$lib/assets/icons';

	export let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');

	let search = '';

	const close = () => (open = false);

	const groups = ['Foundations', 'Brands', 'Components'];

	type Command = {
		group: 'Foundations' | 'Brands' | 'Components';
		name: string;
		link: string;
		icon: any;
	};

	const commands: Command[] = [
		{
			group: 'Foundations',
			name: 'Introduction',
			link: '/',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Foundations',
			name: 'Colors',
			link: '/colors',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Foundations',
			name: 'Icons',
			link: '/icons',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Brands',
			name: 'Vercel',
			link: '/brands#vercel',
			icon: 'Icons.LogoVercel'
		},
		{
			group: 'Brands',
			name: 'Next.js',
			link: '/brands#next.js',
			icon: 'Icons.LogoNext'
		},
		{
			group: 'Brands',
			name: 'Turbo',
			link: '/brands#turbo',
			icon: 'Icons.LogoTurborepo'
		},
		{
			group: 'Brands',
			name: 'v0',
			link: '/brands#v0',
			icon: 'Icons.LogoV0'
		},
		{
			group: 'Components',
			name: 'Avatar',
			link: '/avatar',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Badge',
			link: '/badge',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Book',
			link: '/book',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Button',
			link: '/button',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Calender',
			link: '/calender',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Checkbox',
			link: '/checkbox',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Choicebox',
			link: '/choicebox',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Code Block',
			link: '/code-block',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Collapse',
			link: '/collapse',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Combobox',
			link: '/comboxbox',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Context Menu',
			link: '/context-menu',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Description',
			link: '/description',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Drawer',
			link: '/drawer',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Empty State',
			link: '/Error',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Feedback',
			link: '/feedback',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Gauge',
			link: '/gauge',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Grid',
			link: '/grid',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Input',
			link: '/input',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Keyboard Input',
			link: '/keyboard-input',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Loading Dots',
			link: '/loading-dots',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Menu',
			link: '/menu',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Modal',
			link: '/modal',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Note',
			link: '/note',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Pagination',
			link: '/pagination',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Progress',
			link: '/progress',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Radio',
			link: '/radio',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Scroller',
			link: '/scroller',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Select',
			link: '/select',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Show More',
			link: '/show-more',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Skeleton',
			link: '/skeleton',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Snippet',
			link: '/snippet',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Spinner',
			link: '/spinner',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Stack',
			link: '/stack',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Status Dot',
			link: '/status-dot',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Switch',
			link: '/switch',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Table',
			link: '/table',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Tabs',
			link: '/tabs',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Text',
			link: '/text',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Textarea',
			link: '/textarea',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Menu',
			link: '/menu',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Theme Switcher',
			link: '/theme-switcher',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Toast',
			link: '/toast',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Toggle',
			link: '/toggle',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Tooltip',
			link: '/tooltip',
			icon: 'Icons.ArrowRight'
		},
		{
			group: 'Components',
			name: 'Window',
			link: '/window',
			icon: 'Icons.ArrowRight'
		}
	];

	$: filteredCommands = commands.filter((cmd) => {
		return cmd.name.includes(search.toLowerCase());
	});
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="bg-background-100 p-0 sm:max-w-[640px]" includeX={false}>
			<div class="flex flex-col">
				<div class="flex h-[53px] place-items-center justify-between border-b px-3">
					<!-- search -->
					<input
						bind:value={search}
						type="text"
						class="h-full flex-grow border-none bg-transparent text-lg outline-none placeholder:text-gray-600 focus:outline-none"
						placeholder="Search..."
					/>
					<button on:click={close}>
						<kbd
							class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
						>
							Esc
						</kbd>
					</button>
				</div>
				<div class="flex h-[436px] flex-col overflow-y-auto px-2">
					{#each groups as group}
						{#if filteredCommands.filter((cmd) => cmd.group == group).length > 0}
							<span class="px-2 py-3 text-xs font-light text-gray-700">{group}</span>
						{/if}
						{#each filteredCommands.filter((cmd) => cmd.group == group) as command}
							<a
								href={command.link}
								on:click={close}
								class="flex place-items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-gray-400"
							>
								{#if command.icon === 'Icons.ArrowRight'}
									<Icons.ArrowRight width="16" height="16" class="text-gray-600" />
								{:else if command.icon === 'Icons.LogoVercel'}
									<Icons.LogoVercel width="16" height="16" />
								{:else if command.icon === 'Icons.LogoNext'}
									<Icons.LogoNext width="16" height="16" />
								{:else if command.icon === 'Icons.LogoTurborepo'}
									<Icons.LogoTurborepo width="16" height="16" />
								{:else if command.icon === 'Icons.LogoV0'}
									<Icons.LogoV0 width="16" height="16" />
								{/if}
								{command.name}
							</a>
						{/each}
					{/each}
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content class="h-3/4 bg-background-100 p-0">
			<div class="flex h-[53px] place-items-center justify-between border-b px-3">
				<!-- search -->
				<input
					bind:value={search}
					type="text"
					class="h-full flex-grow border-none bg-transparent text-lg outline-none placeholder:text-gray-600 focus:outline-none"
					placeholder="Search..."
				/>
				<button on:click={close}>
					<kbd
						class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
					>
						Esc
					</kbd>
				</button>
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}
