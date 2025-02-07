<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import { Icons } from '$lib/assets/icons';
	import Book from '$lib/components/ui/book/book.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Variants from './variants.svelte';
	import variants_code from './variants.svelte?raw';
	import CustomColor from './custom-color.svelte';
	import customColor_code from './custom-color.svelte?raw';
	import Width from './width.svelte';
	import width_code from './width.svelte?raw';
	import Textured from './textured.svelte';
	import textured_code from './textured.svelte?raw';
	import CustomIllustration from './custom-illustration.svelte';
	import customIllustration_code from './custom-illustration.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="variants" code={variants_code}>
		<Variants />
	</Demo>

	<Demo id="custom-color" code={customColor_code}>
		<CustomColor />
	</Demo>

	<Demo id="custom-illustration" code={customIllustration_code}>
		<CustomIllustration />
	</Demo>

	<Demo id="width" code={width_code}>
		<Width />
	</Demo>

	<Demo id="textured" code={textured_code}>
		<Textured />
	</Demo>
</PageWrapper>
