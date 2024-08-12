<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import CustomSize from './custom-size.svelte';
	import custom_size_code from './custom-size.svelte?raw';
	import DefaultSize from './default-size.svelte';
	import default_size_code from './default-size.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default-size" code={default_size_code}>
		<DefaultSize />
	</Demo>

	<Demo id="custom-size" code={custom_size_code}>
		<CustomSize />
	</Demo>
</PageWrapper>
