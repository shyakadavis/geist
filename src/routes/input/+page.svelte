<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import AffixAndSuffix from './affix-and-suffix.svelte';
	import affix_and_suffix_code from './affix-and-suffix.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import Disabled from './disabled.svelte';
	import disabled_code from './disabled.svelte?raw';
	import Label from './label.svelte';
	import label_code from './label.svelte?raw';
	import Search from './search.svelte';
	import search_code from './search.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="affix-and-suffix" code={affix_and_suffix_code}>
		<AffixAndSuffix />
	</Demo>

	<Demo id="disabled" code={disabled_code}>
		<Disabled />
	</Demo>

	<Demo
		id="search"
		subtitle="Automatically clears the input if escape is pressed."
		code={search_code}
	>
		<Search />
	</Demo>

	<!-- TODO: Error Something in the areas of how Formsnap does it. -->

	<Demo id="label" code={label_code}>
		<Label />
	</Demo>
</PageWrapper>
