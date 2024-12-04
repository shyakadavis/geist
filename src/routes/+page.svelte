<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Snippet } from '$lib/components/ui/snippet';
	import IntroductionLink from './introduction-link.svelte';

	const preview_icons = [
		Icons.GridSquare,
		Icons.External,
		Icons.ChartBarMiddle,
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
		Icons.ChartTrendingDown,
		Icons.CodeBracket,
		Icons.Key,
		Icons.FloppyDisk,
		Icons.Router,
		Icons.GitBranch,
		Icons.Command,
		Icons.SettingsSliders,
		Icons.Tabs,
		Icons.Database
	];

	const preview_colors = [
		'bg-gray-800',
		'bg-blue-800',
		'bg-purple-700',
		'bg-pink-800',
		'bg-red-800',
		'bg-amber-800',
		'bg-green-800',
		'bg-teal-800'
	];
</script>

<PageWrapper
	title="[Svelte] Geist Design System"
	description="Svelte implementation of Vercel's design system for building consistent web experiences."
>
	<section class="grid auto-rows-fr sm:grid-cols-2">
		<IntroductionLink
			title="Brand Assets"
			description="Learn how to work with our brand assets."
			href="#"
			class="bg-clip-padding"
		>
			<div class="relative mx-auto w-fit">
				<Icons.BrandAssets aria-hidden="true" height="96" width="322" />
				<div
					class="absolute inset-0 transition-[box-shadow] delay-0 [box-shadow:_0_0_8px_8px_hsl(var(--background-200))_inset] group-hover:[box-shadow:_0_0_8px_8px_hsl(var(--background-100))_inset]"
				></div>
			</div>
		</IntroductionLink>
		<IntroductionLink
			title="Icons"
			description="Icon set tailored for developer tools."
			href="/icons"
		>
			<div class="grid grid-cols-8 gap-x-4 gap-y-7 text-gray-900">
				{#each preview_icons as icon}
					<svelte:component
						this={icon}
						aria-hidden="true"
						height="17"
						width="17"
						class="transition-colors delay-0 group-hover:text-gray-1000"
					/>
				{/each}
			</div>
		</IntroductionLink>
		<IntroductionLink
			title="Components"
			description="Building blocks for Svelte applications."
			href="/avatar"
		>
			<div class="pointer-events-none flex flex-wrap gap-4">
				<Snippet
					text="pnpm create svelte"
					class="w-[220px] text-gray-900 [&_button]:text-gray-900"
				/>
				<Button affix={Icons.UserPlus} variant="secondary" class="text-gray-900">
					Collaborate
				</Button>
				<Button
					svg_only
					aria-label="Shield"
					variant="secondary"
					shape="square"
					size="md"
					class="text-gray-900"
				>
					<Icons.ShieldGlobe />
				</Button>
				<!-- TODO: Add a switch (not really a switch) here. -->
				<Input
					aria-labelledby="Not a real input!"
					placeholder="Value"
					affix="Label"
					suffix_styling={false}
				/>
			</div>
		</IntroductionLink>
		<IntroductionLink
			title="Colors"
			description="A high contrast, accessible color system."
			href="/colors"
		>
			<div class="flex justify-between">
				{#each preview_colors as color}
					<div
						class="flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full border border-gray-alpha-400 bg-background-200"
					>
						<div class="h-[72px] w-2 rounded-full {color}"></div>
					</div>
				{/each}
			</div>
		</IntroductionLink>
		<IntroductionLink title="Grid" description="A huge part of the new Vercel aesthetic." href="#"
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
					<p class="text-2xl font-semibold text-gray-700">Geist Sans</p>
				</div>
				<p class="font-mono text-2xl font-semibold tracking-tighter text-gray-700">Geist Mono</p>
			</div>
		</IntroductionLink>
	</section>
</PageWrapper>
