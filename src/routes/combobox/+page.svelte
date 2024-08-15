<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Uncontrolled from './uncontrolled.svelte';
	import uncontrolled_code from './uncontrolled.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="uncontrolled" code={uncontrolled_code}>
		<Uncontrolled />
	</Demo>
</PageWrapper>
