<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import ProjectBanner from '$lib/components/ui/project-banner/project-banner.svelte';
</script>

<ProjectBanner
	label="This project was rolled back by @johnphamous"
	icon={Icons.Stop}
	variant="warning"
	call_to_action={{
		label: 'Undo Rollback',
		onclick: () => {
			alert('Button clicked');
		}
	}}
/>
