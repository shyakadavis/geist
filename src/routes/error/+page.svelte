<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import CustomLabel from './custom-label.svelte';
	import custom_label_code from './custom-label.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Sizes from './sizes.svelte';
	import sizes_code from './sizes.svelte?raw';
	import WithAnErrorProperty from './with-an-error-property.svelte';
	import with_an_error_property_code from './with-an-error-property.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="custom-label" code={custom_label_code}>
		<CustomLabel />
	</Demo>

	<Demo id="sizes" code={sizes_code}>
		<Sizes />
	</Demo>

	<Demo id="with-an-error-property" code={with_an_error_property_code}>
		<WithAnErrorProperty />
	</Demo>
</PageWrapper>
