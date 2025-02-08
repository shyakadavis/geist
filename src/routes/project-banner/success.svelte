<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import ProjectBanner from '$lib/components/ui/project-banner/project-banner.svelte';
</script>

<ProjectBanner
	label="Attack Challenge Mode is enabled for this project"
	icon={Icons.Shield}
	variant="success"
	call_to_action={{ label: 'Disable', href: '/project-banner' }}
/>
