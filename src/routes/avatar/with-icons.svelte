<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<Avatar icon={Icons.LogoGithub} class="size-8">
	<AvatarImage src="https://github.com/Rich-Harris.png" alt="@Rich-Harris" />
	<AvatarFallback>RH</AvatarFallback>
</Avatar>

<Avatar icon={Icons.LogoGitlab} class="size-8">
	<AvatarImage src="https://github.com/trueadm.png" alt="@trueadm" />
	<AvatarFallback>DG</AvatarFallback>
</Avatar>

<Avatar icon={Icons.LogoBitbucketColor} class="size-8">
	<AvatarImage src="https://github.com/dummdidumm.png" alt="@dummdidumm" />
	<AvatarFallback>SH</AvatarFallback>
</Avatar>
