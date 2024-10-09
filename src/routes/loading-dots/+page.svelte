<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import WithText from './with-text.svelte';
	import with_text_code from './with-text.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="with-text" code={with_text_code}>
		<WithText />
	</Demo>
</PageWrapper>
