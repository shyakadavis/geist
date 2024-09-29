<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import Sizes from './sizes.svelte';
	import sizes_code from './sizes.svelte?raw';
	import SubtleWithIcon from './subtle-with-icon.svelte';
	import subtle_with_icon_code from './subtle-with-icon.svelte?raw';
	import WithLabel from './with-label.svelte';
	import with_label from './with-label.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="disabled" code={disabled_code}>
		<Disabled />
	</Demo>

	<Demo id="sizes" code={sizes_code}>
		<Sizes />
	</Demo>

	<Demo id="subtle-with-icon" code={subtle_with_icon_code}>
		<SubtleWithIcon />
	</Demo>

	<Demo id="with-label" code={with_label}>
		<WithLabel />
	</Demo>
</PageWrapper>
