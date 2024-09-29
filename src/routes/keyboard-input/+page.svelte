<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Combination from './combination.svelte';
	import combination_code from './combination.svelte?raw';
	import Modifiers from './modifiers.svelte';
	import modifiers_code from './modifiers.svelte?raw';
	import Small from './small.svelte';
	import small_code from './small.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="modifiers" code={modifiers_code}>
		<Modifiers />
	</Demo>

	<Demo id="combination" code={combination_code}>
		<Combination />
	</Demo>

	<Demo id="small" code={small_code}>
		<Small />
	</Demo>
</PageWrapper>
