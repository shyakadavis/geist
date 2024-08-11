<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	const tabs = [
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' }
	];
</script>

<Tabs.Root value="apple">
	<Tabs.List>
		{#each tabs as { title, value }}
			<Tabs.Trigger {value}>{title}</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each tabs as { title, value }}
		<Tabs.Content {value}>{title}.</Tabs.Content>
	{/each}
</Tabs.Root>
