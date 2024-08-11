<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	const tabs = [
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango', disabled: true, tooltip: 'Mangos are not allowed' }
	];
</script>

<Tabs.Root value="apple">
	<Tabs.List>
		{#each tabs as { title, value, disabled, tooltip }}
			<Tabs.Trigger {disabled} {value} {tooltip}>{title}</Tabs.Trigger>
		{/each}
	</Tabs.List>
</Tabs.Root>
