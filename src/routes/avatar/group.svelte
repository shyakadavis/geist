<script lang="ts">
	import { AvatarGroup } from '$lib/components/ui/avatar';
</script>

<AvatarGroup
	size={32}
	members={[
		{ src: 'https://github.com/huntabyte.png', alt: 'huntabyte' },
		{ src: 'https://github.com/AdrianGonz97.png', alt: 'AdrianGonz97' },
		{ src: 'https://github.com/TGlide.png', alt: 'TGlide' }
	]}
/>

<AvatarGroup
	size={32}
	limit={4}
	members={[
		{ src: 'https://github.com/Conduitry.png', alt: 'Conduitry' },
		{ src: 'https://github.com/ciscoheat.png', alt: 'ciscoheat' },
		{ src: 'https://github.com/techniq.png', alt: 'techniq' },
		{ src: 'https://github.com/shyakadavis.png', alt: 'shyakadavis' },
		{ src: 'https://github.com/anatolzak.png', alt: 'anatolzak' },
		{ src: 'https://github.com/ollema.png', alt: 'ollema' }
	]}
/>

<AvatarGroup
	size={40}
	limit={2}
	spacing="sm"
	orientation="vertical"
	members={[
		{ src: 'https://github.com/benmccann.png', alt: 'benmccann' },
		{ src: 'https://github.com/lukeed.png', alt: 'lukeed' },
		{ src: 'https://github.com/geoffrich.png', alt: 'geoffrich' }
	]}
/>
