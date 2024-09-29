<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import CustomHeight from './custom-height.svelte';
	import custom_height_code from './custom-height.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo
		id="default"
		subtitle="Only use a Drawer on small viewports. Shown here at any viewport for demonstration."
		code={default_code}
	>
		<Default />
	</Demo>

	<Demo id="custom-height" code={custom_height_code}>
		<CustomHeight />
	</Demo>
</PageWrapper>
