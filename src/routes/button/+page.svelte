<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import PrefixAndSuffix from './prefix-and-suffix.svelte';
	import prefix_and_suffix_code from './prefix-and-suffix.svelte?raw';
	import Shapes from './shapes.svelte';
	import shapes_code from './shapes.svelte?raw';
	import Sizes from './sizes.svelte';
	import sizes_code from './sizes.svelte?raw';
	import Variants from './variants.svelte';
	import variants_code from './variants.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="sizes" subtitle="The default size is medium." code={sizes_code}>
		<Sizes />
	</Demo>

	<Demo id="variants" code={variants_code}>
		<Variants />
	</Demo>

	<Demo
		id="shapes"
		subtitle="Icon-only buttons should include the `svgOnly` prop and an `aria-label`."
		code={shapes_code}
	>
		<Shapes />
	</Demo>

	<Demo id="prefix-and-suffix" code={prefix_and_suffix_code}>
		<PrefixAndSuffix />
	</Demo>
</PageWrapper>
