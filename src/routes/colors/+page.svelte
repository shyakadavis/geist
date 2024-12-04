<script lang="ts">
	import PageSection from '$lib/components/shared/page-section.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Backgrounds from './backgrounds.svelte';
	import Borders from './borders.svelte';
	import ComponentBackgrounds from './component-backgrounds.svelte';
	import Contrasts from './contrasts.svelte';
	import Scales from './scales.svelte';
	import TextAndIcons from './text-and-icons.svelte';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<PageSection
		id="scales"
		subtitle="There are 10 color scales in the system. P3 colors are used on supported browsers and displays."
	>
		<Scales />
	</PageSection>
	<PageSection
		id="backgrounds"
		subtitle="There are two background colors for pages and UI components. In most instances, you should use Background 1—especially when color is being placed on top of the background. Background 2 should be used sparingly when a subtle background differentiation is needed."
	>
		<Backgrounds />
	</PageSection>
	<PageSection
		id="colors-1\-3:-component-backgrounds"
		subtitle="These three colors are designed for UI component backgrounds."
	>
		<ComponentBackgrounds />
	</PageSection>
	<PageSection
		id="colors-4\-6:-borders"
		subtitle="These three colors are designed for UI component borders."
	>
		<Borders />
	</PageSection>
	<PageSection
		id="colors-7\-8:-high-contrast-backgrounds"
		subtitle="These two colors are designed for high contrast UI component backgrounds."
	>
		<Contrasts />
	</PageSection>
	<PageSection
		id="colors-9\-10:-text-and-icons"
		subtitle="These two colors are designed for accessible text and icons."
	>
		<TextAndIcons />
	</PageSection>
</PageWrapper>
