<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import * as Tabs from '$lib/components/ui/tabs';

	const tabs = [
		{ title: 'GitHub', value: 'github', icon: Icons.LogoGithub },
		{ title: 'GitLab', value: 'gitlab', icon: Icons.LogoGitlab },
		{ title: 'Bitbucket', value: 'bitbucket', icon: Icons.LogoBitbucketColor }
	];
</script>

<Tabs.Root value="github">
	<Tabs.List>
		{#each tabs as { title, value, icon }}
			<Tabs.Trigger {icon} {value}>{title}</Tabs.Trigger>
		{/each}
	</Tabs.List>
</Tabs.Root>
