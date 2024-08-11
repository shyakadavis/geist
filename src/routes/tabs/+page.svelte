<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import DisableSpecificTabs from './disable-specific-tabs.svelte';
	import disable_specific_tabs_code from './disable-specific-tabs.svelte?raw';
	import Secondary from './secondary.svelte';
	import secondary_code from './secondary.svelte?raw';
	import WithIcons from './with-icons.svelte';
	import with_icons_code from './with-icons.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="disable-specific-tabs" code={disable_specific_tabs_code}>
		<DisableSpecificTabs />
	</Demo>

	<Demo id="with-icons" code={with_icons_code}>
		<WithIcons />
	</Demo>

	<Demo id="secondary" code={secondary_code}>
		<Secondary />
	</Demo>
</PageWrapper>
