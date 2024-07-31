<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import ArcPriority from './arc-priority.svelte';
	import arc_priority_code from './arc-priority.svelte?raw';
	import CustomColorRange from './custom-color-range.svelte';
	import custom_color_range_code from './custom-color-range.svelte?raw';
	import CustomSecondaryColor from './custom-secondary-color.svelte';
	import custom_secondary_color_code from './custom-secondary-color.svelte?raw';
	import DefaultColorScale from './default-color-scale.svelte';
	import default_color_scale_code from './default-color-scale.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Label from './label.svelte';
	import label_code from './label.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="label" code={label_code}>
		<Label />
	</Demo>

	<Demo id="default-color-scale" code={default_color_scale_code}>
		<DefaultColorScale />
	</Demo>

	<Demo id="custom-color-range" code={custom_color_range_code}>
		<CustomColorRange />
	</Demo>

	<Demo id="custom-secondary-color" code={custom_secondary_color_code}>
		<CustomSecondaryColor />
	</Demo>

	<Demo
		id="arc-priority"
		subtitle="When using the gauge to display a ratio, use the `equal` arc priority to make both arcs are equally sized."
		code={arc_priority_code}
	>
		<ArcPriority />
	</Demo>
</PageWrapper>
