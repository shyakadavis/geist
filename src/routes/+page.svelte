<script lang="ts">
import { Icons } from "$lib/assets/icons";
import Footer from "./footer.svelte";
import IntroductionLink from "./introduction-link.svelte";

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

const preview_colors = [
	"--gray-800",
	"--blue-800",
	"--purple-700",
	"--pink-800",
	"--red-800",
	"--amber-800",
	"--green-800",
	"--teal-800",
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

		<section class="grid sm:grid-cols-2 auto-rows-fr border-t">
			<IntroductionLink
				title="Brand Assets"
				description="Learn how to work with our brand assets."
				href="/brands"
				class="bg-clip-padding"
			>
				<div class="relative mx-auto w-fit">
					<Icons.BrandAssets aria-hidden="true" height="96" width="322" />
					<div
						class="absolute inset-0 [box-shadow:_0_0_8px_8px_var(--background-200)_inset] group-hover:[box-shadow:_0_0_8px_8px_var(--background-100)_inset] transition-[box-shadow] delay-0"
					></div>
				</div>
			</IntroductionLink>
			<IntroductionLink
				title="Icons"
				description="Icon set tailored for developer tools."
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
			</IntroductionLink>
			<IntroductionLink
				title="Components"
				description="Building blocks for Svelte applications."
				href="/avatar"
			></IntroductionLink>
			<IntroductionLink
				title="Colors"
				description="A high contrast, accessible color system."
				href="/colors"
			>
				<div class="flex justify-between">
					{#each preview_colors as color}
						<div
							class="bg-background-200 border-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full border"
						>
							<div class="h-[72px] w-2 rounded-full" style="background: var({color});"></div>
						</div>
					{/each}
				</div>
			</IntroductionLink>
			<IntroductionLink
				title="Grid"
				description="A huge part of the new Vercel aesthetic."
				href="/grid"
			></IntroductionLink>
			<IntroductionLink
				title="Typeface"
				description="Specifically designed for developers and designers."
				href="https://vercel.com/font"
			>
				<div
					class="border-1 relative grid h-20 grow grid-cols-2 place-items-center justify-around rounded border border-dashed border-gray-400"
				>
					<div
						class="flex h-full w-full items-center justify-center border-r border-dashed border-gray-400"
					>
						<p class="text-gray-700 text-2xl font-semibold">Geist Sans</p>
					</div>
					<p class="text-gray-700 text-2xl tracking-tighter font-semibold font-mono">Geist Mono</p>
				</div>
			</IntroductionLink>
		</section>
	</div>
	<Footer next_title="Colors" next_href="/colors" />
</section>
