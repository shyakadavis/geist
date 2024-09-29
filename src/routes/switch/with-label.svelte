<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(false);
	const Closed = Icons.LockClosedSmall;
	const Open = Icons.LockOpenSmall;
</script>

<div class="grid w-fit grid-cols-2 gap-6">
	<Switch bind:checked>Enable Firewall</Switch>
	<Switch bind:checked direction="switch-first">Enable Firewall</Switch>

	<Switch bind:checked size="lg">Enable Firewall</Switch>
	<Switch bind:checked direction="switch-first" size="lg">Enable Firewall</Switch>

	<Switch bind:checked icon={{ checked: Closed, unchecked: Open }}>Enable Firewall</Switch>
	<Switch bind:checked direction="switch-first" icon={{ checked: Closed, unchecked: Open }}>
		Enable Firewall
	</Switch>

	<Switch bind:checked size="lg" icon={{ checked: Closed, unchecked: Open }}>
		Enable Firewall
	</Switch>
	<Switch
		bind:checked
		direction="switch-first"
		size="lg"
		icon={{ checked: Closed, unchecked: Open }}
	>
		Enable Firewall
	</Switch>

	<Switch bind:checked variant="subtle" icon={{ checked: Closed, unchecked: Open }}>
		Enable Firewall
	</Switch>
	<Switch
		bind:checked
		direction="switch-first"
		variant="subtle"
		icon={{ checked: Closed, unchecked: Open }}
	>
		Enable Firewall
	</Switch>

	<Switch bind:checked size="lg" variant="subtle" icon={{ checked: Closed, unchecked: Open }}>
		Enable Firewall
	</Switch>
	<Switch
		bind:checked
		direction="switch-first"
		size="lg"
		variant="subtle"
		icon={{ checked: Closed, unchecked: Open }}
	>
		Enable Firewall
	</Switch>

	<Switch
		bind:checked
		size="lg"
		variant="subtle"
		disabled
		icon={{ checked: Closed, unchecked: Open }}
	>
		Enable Firewall
	</Switch>
	<Switch
		bind:checked
		direction="switch-first"
		size="lg"
		variant="subtle"
		disabled
		icon={{ checked: Closed, unchecked: Open }}
	>
		Enable Firewall
	</Switch>
</div>
