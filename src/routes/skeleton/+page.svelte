<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import DefaultWithBoxHeight from './default-with-box-height.svelte';
	import default_with_box_height_code from './default-with-box-height.svelte?raw';
	import DefaultWithSetWidth from './default-with-set-width.svelte';
	import default_with_set_width_code from './default-with-set-width.svelte?raw';
	import WrappingChildren from './wrapping-children.svelte';
	import wrapping_children_code from './wrapping-children.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default-with-set-width" code={default_with_set_width_code}>
		<DefaultWithSetWidth />
	</Demo>

	<Demo id="default-with-box-height" code={default_with_box_height_code}>
		<DefaultWithBoxHeight />
	</Demo>

	<Demo id="wrapping-children" code={wrapping_children_code}>
		<WrappingChildren />
	</Demo>
</PageWrapper>
