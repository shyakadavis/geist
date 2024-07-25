<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import ThemeSwitcher from '$lib/components/shared/theme-switcher.svelte';
	import Command from '$lib/components/shared/command/command.svelte';

	let open = false;

	const toggleOpen = () => (open = true);

	const docKeydown = (e: KeyboardEvent) => {
		if (e.ctrlKey && e.key.toLowerCase() == 'k') {
			e.preventDefault();
			toggleOpen();
		}
	};
</script>

<svelte:document on:keydown={docKeydown} />

<Command bind:open />

<header class="sticky top-0 z-20 mx-auto w-full max-w-[1220px]">
	<div
		class="flex w-full max-w-[1200px] xl:max-w-[1219px] border-b border-l border-r border-gray-alpha-400 bg-background-100 pl-[22px] dark:border-[#242424]"
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
					<Icons.MagnifyingGlass width="16" height="16" aria-hidden="true" />
				</button>
			</div>
		</div>
	</div>
</header>
