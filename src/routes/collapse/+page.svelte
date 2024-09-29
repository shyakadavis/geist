<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Expanded from './expanded.svelte';
	import expanded_code from './expanded.svelte?raw';
	import Small from './small.svelte';
	import small_code from './small.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="expanded" code={expanded_code}>
		<Expanded />
	</Demo>

	<Demo id="small" code={small_code}>
		<Small />
	</Demo>
</PageWrapper>
