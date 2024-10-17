<script lang="ts">
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import IconsGallery from './icons-gallery.svelte';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<IconsGallery />
</PageWrapper>
