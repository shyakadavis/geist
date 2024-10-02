<script lang="ts">
	import PageSection from '$lib/components/shared/page-section.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import ColorMenu from './color-menu.svelte';

	import { scales } from './data.js';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<PageSection
		id="scales"
		subtitle="There are 10 color scales in the system. P3 colors are used on supported browsers and displays."
	>
		<ul class="grid gap-6 py-10">
			{#each Object.entries(scales) as [scale, colors]}
				<li class="flex flex-col items-start gap-2 md:flex-row md:items-center">
					{@render color_scale({ scale, colors })}
				</li>
			{/each}
		</ul>
	</PageSection>
	<PageSection
		id="backgrounds"
		subtitle="There are two background colors for pages and UI components. In most instances, you should use Background 1—especially when color is being placed on top of the background. Background 2 should be used sparingly when a subtle background differentiation is needed."
	>
		<!--  -->
	</PageSection>
</PageWrapper>

{#snippet color_scale({ scale, colors }: { scale: string; colors: string[] })}
	<p class="w-[100px] flex-shrink-0 text-sm font-medium text-gray-1000">{scale}</p>
	<ul class="grid w-full grid-cols-10 gap-1 md:gap-2">
		{#each colors as color}
			<li>
				<ColorMenu {color} />
			</li>
		{/each}
	</ul>
{/snippet}
