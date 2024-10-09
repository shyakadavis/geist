<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import Indeterminate from './indeterminate.svelte';
	import indeterminate_code from './indeterminate.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" class="space-y-2" code={default_code}>
		<Default />
	</Demo>

	<Demo id="disabled" class="space-y-2" code={disabled_code}>
		<Disabled />
	</Demo>

	<Demo id="indeterminate" class="space-y-2" code={indeterminate_code}>
		<Indeterminate />
	</Demo>
</PageWrapper>
