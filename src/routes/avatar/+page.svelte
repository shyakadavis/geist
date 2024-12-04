<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import Group from './group.svelte';
	import group_code from './group.svelte?raw';
	import Placeholder from './placeholder.svelte';
	import placeholder_code from './placeholder.svelte?raw';
	import WithIcons from './with-icons.svelte';
	import with_icons_code from './with-icons.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="group" class="space-y-4" code={group_code}>
		<Group />
	</Demo>

	<Demo id="with-icons" class="space-y-4" code={with_icons_code}>
		<WithIcons />
	</Demo>

	<Demo id="placeholder" class="space-y-4" code={placeholder_code}>
		<Placeholder />
	</Demo>
</PageWrapper>
