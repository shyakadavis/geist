<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	const tabs = [
		{ content: '🍎', value: 'apple' },
		{ content: '🍊', value: 'orange' },
		{ content: '🥭', value: 'mango' }
	];
</script>

<Tabs.Root value="apple">
	<Tabs.List>
		{#each tabs as { value }}
			<Tabs.Trigger {value}>{value}</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each tabs as { content, value }}
		<Tabs.Content {value}>{content}</Tabs.Content>
	{/each}
</Tabs.Root>
