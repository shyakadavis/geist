<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import CustomEmptyMessage from './custom-empty-message.svelte';
	import custom_empty_message_code from './custom-empty-message.svelte?raw';
	import CustomWidthInput from './custom-width-input.svelte';
	import custom_width_input_code from './custom-width-input.svelte?raw';
	import CustomWidthList from './custom-width-list.svelte';
	import custom_width_list_code from './custom-width-list.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import Sizes from './sizes.svelte';
	import sizes_code from './sizes.svelte?raw';
	import UsedInsideAModal from './used-inside-a-modal.svelte';
	import used_inside_a_modal_code from './used-inside-a-modal.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="disabled" code={disabled_code}>
		<Disabled />
	</Demo>

	<!-- <Demo id="errored" code={errored_code}>
		<Errored />
	</Demo> -->

	<Demo id="custom-width-input" code={custom_width_input_code}>
		<CustomWidthInput />
	</Demo>

	<Demo id="custom-width-list" code={custom_width_list_code}>
		<CustomWidthList />
	</Demo>

	<Demo id="custom-empty-message" code={custom_empty_message_code}>
		<CustomEmptyMessage />
	</Demo>

	<Demo id="sizes" code={sizes_code}>
		<Sizes />
	</Demo>

	<Demo id="used-inside-a-modal" code={used_inside_a_modal_code}>
		<UsedInsideAModal />
	</Demo>
</PageWrapper>
