<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import BasicTable from './basic-table.svelte';
	import basic_table_code from './basic-table.svelte?raw';
	import FullFeaturedTable from './full-featured-table.svelte';
	import full_featured_table_code from './full-featured-table.svelte?raw';
	import InteractiveTable from './interactive-table.svelte';
	import interactive_table_code from './interactive-table.svelte?raw';
	import StripedTable from './striped-table.svelte';
	import striped_table_code from './striped-table.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="basic-table" code={basic_table_code}>
		<BasicTable />
	</Demo>

	<Demo id="striped-table" code={striped_table_code}>
		<StripedTable />
	</Demo>

	<Demo id="interactive-table" code={interactive_table_code}>
		<InteractiveTable />
	</Demo>

	<Demo id="full-featured-table" code={full_featured_table_code}>
		<FullFeaturedTable />
	</Demo>
</PageWrapper>
