<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<Avatar.Root icon={Icons.LogoGithub} class="size-8">
	<Avatar.Image src="https://github.com/Rich-Harris.png" alt="@Rich-Harris" />
	<Avatar.Fallback>RH</Avatar.Fallback>
</Avatar.Root>

<Avatar.Root icon={Icons.LogoGitlab} class="size-8">
	<Avatar.Image src="https://github.com/trueadm.png" alt="@trueadm" />
	<Avatar.Fallback>DG</Avatar.Fallback>
</Avatar.Root>

<Avatar.Root icon={Icons.LogoBitbucketColor} class="size-8">
	<Avatar.Image src="https://github.com/dummdidumm.png" alt="@dummdidumm" />
	<Avatar.Fallback>SH</Avatar.Fallback>
</Avatar.Root>
