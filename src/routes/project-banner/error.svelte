<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import ProjectBanner from '$lib/components/ui/project-banner/project-banner.svelte';
</script>

<ProjectBanner
	label="Payment failed, update credit card information before your account is shut down"
	icon={Icons.Warning}
	variant="error"
	call_to_action={{ label: 'Add Credit Card', href: '/project-banner' }}
/>
