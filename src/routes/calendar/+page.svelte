<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Presets from './presets.svelte';
	import presets_code from './presets.svelte?raw';
	import RangeCalendar from './range-calendar.svelte';
	import range_calendar_code from './range-calendar.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="range-calendar" code={range_calendar_code}>
		<RangeCalendar />
	</Demo>

	<Demo id="presets" subtitle="Provide common date ranges." code={presets_code}>
		<Presets />
	</Demo>
</PageWrapper>
