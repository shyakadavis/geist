<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import CustomMax from './custom-max.svelte';
	import custom_max_code from './custom-max.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import DynamicColors from './dynamic-colors.svelte';
	import dynamic_colors_code from './dynamic-colors.svelte?raw';
	import Themed from './themed.svelte';
	import themed_code from './themed.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="custom-max" code={custom_max_code}>
		<CustomMax />
	</Demo>

	<Demo id="dynamic-colors" code={dynamic_colors_code}>
		<DynamicColors />
	</Demo>

	<Demo id="themed" code={themed_code}>
		<Themed />
	</Demo>
</PageWrapper>
