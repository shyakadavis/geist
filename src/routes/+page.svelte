<script lang="ts">
import { Icons } from "$lib/assets/icons";

const preview_icons = [
	Icons.GridSquare,
	Icons.External,
	Icons.CharBarMiddle,
	Icons.ClockDashed,
	Icons.Globe,
	Icons.Flag,
	Icons.Bell,
	Icons.Box,
	Icons.Shield,
	Icons.Inbox,
	Icons.PencilEdit,
	Icons.FileText,
	Icons.Notification,
	Icons.Paperclip,
	Icons.CharTrendingDown,
	Icons.CodeBracket,
	Icons.Key,
	Icons.FloppyDisk,
	Icons.Router,
	Icons.GitBranch,
	Icons.Command,
	Icons.SettingsSliders,
	Icons.Tabs,
	Icons.Database,
];
</script>

<section
	class="relative flex h-full w-full flex-col px-0 pb-8 xl:mx-auto xl:-translate-x-px xl:px-0 xl:pb-0"
>
	<div class="max-w-[1200px] min-w-[300px] border-r">
		<section class="p-12">
			<h1
				class="text-gray-1000 text-2xl tracking-tighter font-semibold sm:text-3xl md:text-4xl mb-3"
			>
				Geist Design System
			</h1>
			<p class="text-gray-900 text-base sm:text-lg md:text-xl">
				Vercel design system for building consistent web experiences.
			</p>
		</section>

		<section
			class="grid sm:grid-cols-2 auto-rows-fr border-t [&>div]:border-b odd:[&>div]:border-r hover:[&>div>a]:bg-background-100 [&>div>a]:transition-colors [&>div>a]:delay-0"
		>
			<div>
				<a
					class="group bg-clip-padding relative flex h-full flex-col gap-6 p-8 no-underline outline-none"
					href="/brands"
				>
					<div class="relative mx-auto w-fit">
						<Icons.BrandAssets aria-hidden="true" height="96" width="322" />
						<div
							class="absolute inset-0"
							style="box-shadow: 0 0 8px 8px var(--background-200) inset"
						></div>
					</div>
					<div class="mt-auto">
						<p class="font-semibold">Brand Assets</p>
						<p class="text-gray-900">Learn how to work with our brand assets.</p>
					</div>
					<div
						class="z-10 pointer-events-none absolute inset-0 border-2 border-blue-700 opacity-0 group-focus-visible:opacity-100"
					></div>
				</a>
			</div>
			<div>
				<a
					class="group relative flex h-full flex-col gap-6 p-8 no-underline outline-none"
					style="background-clip:padding-box"
					href="/icons"
				>
					<div class="grid grid-cols-8 text-gray-900 gap-y-7 gap-x-4">
						{#each preview_icons as icon}
							<svelte:component
								this={icon}
								aria-hidden="true"
								height="17"
								width="17"
								class="group-hover:text-gray-1000 transition-colors delay-0"
							/>
						{/each}
					</div>
					<div class="mt-auto">
						<p class="font-semibold">Icons</p>
						<p class="text-gray-900">Icon set tailored for developer tools.</p>
					</div>
					<div
						class="z-10 pointer-events-none absolute inset-0 border-2 border-blue-700 opacity-0 group-focus-visible:opacity-100"
					></div>
				</a>
			</div>
			<div>Components</div>
			<div>Colors</div>
			<div>Grid</div>
			<div>Typeface</div>
		</section>
	</div>
</section>
