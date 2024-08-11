<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import BoxAlign from './box-align.svelte';
	import box_align_code from './box-align.svelte?raw';
	import Components from './components.svelte';
	import components_code from './components.svelte?raw';
	import CustomContent from './custom-content.svelte';
	import custom_content_code from './custom-content.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import NoDelay from './no-delay.svelte';
	import no_delay_code from './no-delay.svelte?raw';
	import Other from './other.svelte';
	import other_code from './other.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="no-delay" code={no_delay_code}>
		<NoDelay />
	</Demo>

	<Demo id="box-align" code={box_align_code}>
		<BoxAlign />
	</Demo>

	<Demo id="custom-content" code={custom_content_code}>
		<CustomContent />
	</Demo>

	<Demo id="components" code={components_code}>
		<Components />
	</Demo>

	<Demo id="other" code={other_code}>
		<Other />
	</Demo>
</PageWrapper>
