<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import PrefixAndSuffix from './prefix-and-suffix.svelte';
	import prefix_and_suffix_code from './prefix-and-suffix.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="prefix-and-suffix" code={prefix_and_suffix_code}>
		<PrefixAndSuffix />
	</Demo>
</PageWrapper>
