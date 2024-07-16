<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Footer from '../footer.svelte';
	import Sizes from './sizes.svelte';
	import sizes_code from './sizes.svelte?raw';
	import Variants from './variants.svelte';
	import variants_code from './variants.svelte?raw';
	import WithIcons from './with-icons.svelte';
	import with_icons_code from './with-icons.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="variants" class="space-y-2" code={variants_code}>
		<Variants />
	</Demo>

	<Demo id="sizes" class="space-y-2" code={sizes_code}>
		<Sizes />
	</Demo>

	<Demo id="with-icons" class="space-y-2" code={with_icons_code}>
		<WithIcons />
	</Demo>

	<slot name="footer">
		<Footer />
	</slot>
</PageWrapper>
