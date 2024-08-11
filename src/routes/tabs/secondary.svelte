<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	const tabs = [
		{ title: 'GitHub', value: 'github' },
		{ title: 'GitLab', value: 'gitlab' },
		{ title: 'Bitbucket', value: 'bitbucket' }
	];
</script>

<Tabs.Root value="github">
	<Tabs.List variant="secondary">
		{#each tabs as { title, value }}
			<Tabs.Trigger {value}>{title}</Tabs.Trigger>
		{/each}
	</Tabs.List>
</Tabs.Root>
