<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Inline from './inline.svelte';
	import inline_code from './inline.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" subtitle="Should only be used on desktop." code={default_code}>
		<Default />
	</Demo>

	<Demo id="inline" code={inline_code}>
		<Inline />
	</Demo>
</PageWrapper>
