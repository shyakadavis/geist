<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import RadioDisabled from './radio-disabled.svelte';
	import radio_disabled_code from './radio-disabled.svelte?raw';
	import RadioStandalone from './radio-standalone.svelte';
	import radio_standalone_code from './radio-standalone.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="radio-disabled" code={radio_disabled_code}>
		<RadioDisabled />
	</Demo>

	<!-- TODO: Why isn't native browser validation kicking in? Is it because underneath it all, there's no hidden input associated with the radio button? -->
	<!-- <Demo id="radio-required" code={radio_required_code}>
		<RadioRequired />
	</Demo>
    -->

	<!-- TODO: Radio Headless -->

	<Demo
		id="radio-standalone"
		subtitle="Standalone unlabelled radio input for use in custom UI."
		code={radio_standalone_code}
	>
		<RadioStandalone />
	</Demo>
</PageWrapper>
