<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(false);
</script>

<div class="grid gap-6">
	<Switch
		bind:checked
		variant="subtle"
		aria-label="Enable Firewall"
		icon={{ checked: Icons.LockClosedSmall, unchecked: Icons.LockOpenSmall }}
	/>
	<Switch
		bind:checked
		disabled
		variant="subtle"
		aria-label="Enable Firewall"
		icon={{ checked: Icons.LockClosedSmall, unchecked: Icons.LockOpenSmall }}
	/>

	<Switch
		bind:checked
		variant="subtle"
		aria-label="Enable Firewall"
		size="lg"
		icon={{ checked: Icons.LockClosedSmall, unchecked: Icons.LockOpenSmall }}
	/>
	<Switch
		bind:checked
		disabled
		variant="subtle"
		aria-label="Enable Firewall"
		size="lg"
		icon={{ checked: Icons.LockClosedSmall, unchecked: Icons.LockOpenSmall }}
	/>
</div>
