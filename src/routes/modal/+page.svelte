<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import DisabledActions from './disabled-actions.svelte';
	import disabled_actions_code from './disabled-actions.svelte?raw';
	import SingleButton from './single-button.svelte';
	import single_button_code from './single-button.svelte?raw';
	import Sticky from './sticky.svelte';
	import sticky_code from './sticky.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="sticky" code={sticky_code}>
		<Sticky />
	</Demo>

	<Demo id="single-button" code={single_button_code}>
		<SingleButton />
	</Demo>

	<Demo id="disabled-actions" code={disabled_actions_code}>
		<DisabledActions />
	</Demo>
</PageWrapper>
