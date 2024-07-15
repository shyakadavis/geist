<script lang="ts">
import { Icons } from "$lib/assets/icons";
import ThemeSwitcher from "./theme-switcher.svelte";
</script>

<header class="sticky top-0 z-20 mx-auto w-full max-w-[1220px]">
	<div
		class="border-gray-alpha-400 bg-background-100 flex w-full max-w-[1219px] border-b border-l border-r pl-[22px] dark:border-[#242424]"
	>
		<div
			class="border-gray-alpha-400 flex grow items-center gap-4 border-r py-4 pl-px xl:w-[237px] xl:grow-0"
		>
			<a class="text-gray-1000 flex items-center gap-4 no-underline" href="/">
				<Icons.LogoGeist width="27" height="27" aria-hidden="true" />
				<p class="text-gray-1000 font-extrabold">Geist Design System</p>
			</a>
		</div>

		<div class="flex items-center justify-between p-4 xl:grow">
			<button
				class="hover:bg-background-200 focus-visible:shadow-focus-ring hidden h-8 w-[220px] cursor-pointer items-center justify-between rounded-md border border-gray-400 bg-transparent pl-2 pr-1.5 font-sans text-sm text-gray-700 outline-none xl:flex"
				type="button"
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
		</div>
	</div>
</header>
