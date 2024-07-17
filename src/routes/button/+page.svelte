<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import AffixAndSuffix from './affix-and-suffix.svelte';
	import affix_and_suffix_code from './affix-and-suffix.svelte?raw';
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

	<Demo id="affix-and-suffix" code={affix_and_suffix_code}>
		<AffixAndSuffix />
	</Demo>
</PageWrapper>
