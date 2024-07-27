<script lang="ts">
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Icons from './Icons.svelte';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<!-- Todo: add search field -->
	<!-- <Search></Search> -->
	<Icons />
</PageWrapper>
