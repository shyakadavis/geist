<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(false);
</script>

<div class="grid grid-cols-2">
	<Switch aria-label="Enable Firewall" bind:checked />
	<Switch aria-label="Enable Firewall" bind:checked size="lg" />
</div>
