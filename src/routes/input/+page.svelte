<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import Label from './label.svelte';
	import label_code from './label.svelte?raw';
	import PrefixAndSuffix from './prefix-and-suffix.svelte';
	import prefix_and_suffix_code from './prefix-and-suffix.svelte?raw';
	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="prefix-and-suffix" code={prefix_and_suffix_code}>
		<PrefixAndSuffix />
	</Demo>

	<Demo id="disabled" code={disabled_code}>
		<Disabled />
	</Demo>

	<!-- TODO: Search
     Svelte 4 has some limitations: 'type' attribute cannot be dynamic if input uses two-way binding svelte(invalid-type)
     Will revisit this when Svelte 5 is released. -->

	<!-- TODO: Error
      Something in the areas of how Formsnap does it. -->

	<Demo id="label" code={label_code}>
		<Label />
	</Demo>
</PageWrapper>
