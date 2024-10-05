<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import MultiSelect from './multi-select.svelte';
	import multi_select_code from './multi-select.svelte?raw';
	import SingleSelect from './single-select.svelte';
	import single_select_code from './single-select.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="single-select" class="space-y-2" code={single_select_code}>
		<SingleSelect />
	</Demo>

	<Demo id="multi-select" class="space-y-2" code={multi_select_code}>
		<MultiSelect />
	</Demo>

	<Demo id="disabled" class="space-y-2" code={disabled_code}>
		<Disabled />
	</Demo>
</PageWrapper>
