<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import Command from '$lib/components/shared/command/command.svelte';
	import ThemeSwitcher from '$lib/components/shared/theme-switcher.svelte';
	import { Button } from '$lib/components/ui/button';
	import { command_open_state } from '$lib/stores';
</script>

<Command />

<header class="sticky top-0 z-20 mx-auto w-full max-w-[1220px]">
	<div
		class="flex w-full max-w-[1200px] border-b border-l border-r border-gray-alpha-400 bg-background-100 pl-[22px] dark:border-[#242424] xl:max-w-[1219px]"
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
				on:click={command_open_state.toggle}
			>
				Search Geist
				<kbd
					class="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-md border bg-background-100 px-1 font-mono text-xs font-medium text-gray-900"
				>
					<span class="text-xs">⌘</span>
					K
				</kbd>
			</button>

			<Button
				svg_only
				aria-label="Search"
				variant="secondary"
				shape="circle"
				size="sm"
				class="ml-auto mr-2 text-gray-1000"
				href="https://github.com/shyakadavis/geist"
				target="_blank"
				rel="noopener"
			>
				<Icons.LogoGithub width="20" height="20" aria-hidden="true" />
			</Button>

			<div class="hidden xl:block">
				<ThemeSwitcher />
			</div>

			<div class="flex place-items-center xl:hidden">
				<Button
					svg_only
					aria-label="Search"
					variant="secondary"
					shape="circle"
					size="sm"
					class="text-gray-1000 xl:hidden"
					on:click={command_open_state.toggle}
				>
					<Icons.MagnifyingGlass width="20" height="20" aria-hidden="true" />
				</Button>
			</div>
		</div>
	</div>
</header>
