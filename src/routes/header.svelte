<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import ThemeSwitcher from '$lib/components/shared/theme-switcher.svelte';
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';

	let open = true;
	const isDesktop = mediaQuery('(min-width: 768px)');

	const toggleOpen = () => (open = true);

	let search = '';
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="bg-background-100 sm:max-w-[640px] p-0" includeX={false}>
			<div class="flex h-[53px] place-items-center justify-between border-b px-3">
				<!-- search -->
				<input
					bind:value={search}
					type="text"
					class="h-full border-none bg-transparent text-lg outline-none placeholder:text-gray-600 focus:outline-none flex-grow"
					placeholder="Search..."
				/>
				<kbd
					class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
				>
					Esc
				</kbd>
			</div>
			<div class="h-[436px]"></div>
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
					class="h-full border-none bg-transparent text-lg outline-none placeholder:text-gray-600 focus:outline-none flex-grow"
					placeholder="Search..."
				/>
				<kbd
					class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
				>
					Esc
				</kbd>
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}

<header class="sticky top-0 z-20 mx-auto w-full max-w-[1220px]">
	<div
		class="flex w-full max-w-[1219px] border-b border-l border-r border-gray-alpha-400 bg-background-100 pl-[22px] dark:border-[#242424]"
	>
		<div
			class="flex grow items-center gap-4 border-r border-gray-alpha-400 py-4 pl-px xl:w-[237px] xl:grow-0"
		>
			<a class="flex items-center gap-4 text-gray-1000 no-underline" href="/">
				<Icons.LogoGeist width="27" height="27" aria-hidden="true" />
				<p class="font-extrabold text-gray-1000">Geist Design System</p>
			</a>
		</div>

		<div class="flex items-center justify-between p-4 xl:grow">
			<button
				class="hidden h-8 w-[220px] cursor-pointer items-center justify-between rounded-md border border-gray-400 bg-transparent pl-2 pr-1.5 font-sans text-sm text-gray-700 outline-none hover:bg-background-200 focus-visible:shadow-focus-ring xl:flex"
				type="button"
				on:click={toggleOpen}
			>
				Search Geist
				<kbd
					class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
				>
					<span class="text-base">⌘</span>
					K
				</kbd>
			</button>

			<div class="hidden xl:block">
				<ThemeSwitcher />
			</div>

			<div class="flex place-items-center xl:hidden">
				<button
					class="flex size-8 place-items-center justify-center rounded-full border"
					on:click={toggleOpen}
				>
					<!-- Make sure to put a search icon here this is just here as a placeholder -->
					<Icons.ArrowLeft width="16" height="16" aria-hidden="true" />
				</button>
			</div>
		</div>
	</div>
</header>
