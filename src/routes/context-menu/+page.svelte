<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import AffixAndSuffix from './affix-and-suffix.svelte';
	import affix_and_suffix_code from './affix-and-suffix.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import DisabledItems from './disabled-items.svelte';
	import disabled_items_code from './disabled-items.svelte?raw';
	import LinkItems from './link-items.svelte';
	import link_items_code from './link-items.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>

	<Demo id="disabled-items" code={disabled_items_code}>
		<DisabledItems />
	</Demo>

	<Demo id="link-items" code={link_items_code}>
		<LinkItems />
	</Demo>

	<Demo id="affix-and-suffix" code={affix_and_suffix_code}>
		<AffixAndSuffix />
	</Demo>
</PageWrapper>
