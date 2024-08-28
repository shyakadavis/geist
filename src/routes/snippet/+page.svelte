<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
    import Multiline from './multiline.svelte';
	import multiline_code from './multiline.svelte?raw';
    import NoPrompt from './no-prompt.svelte';
	import no_prompt_code from './no-prompt.svelte?raw';
    import Callback from './callback.svelte';
	import callback_code from './callback.svelte?raw';
    import Variants from './variants.svelte';
	import variants_code from './variants.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" code={default_code}>
		<Default />
	</Demo>
    <Demo id="multi-line" code={multiline_code}>
		<Multiline />
	</Demo>
    <Demo id="no-prompt" code={no_prompt_code}>
		<NoPrompt />
	</Demo>
    <Demo id="callback" code={callback_code}>
		<Callback />
	</Demo>
    <Demo id="variants" code={variants_code}>
		<Variants />
	</Demo>
</PageWrapper>
