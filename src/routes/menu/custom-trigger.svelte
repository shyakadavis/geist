<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Menu from '$lib/components/ui/menu';
</script>

<Menu.Root>
	<Menu.Trigger>
		<Avatar.Root class="size-8">
			<Avatar.AvatarImage src="https://github.com/mattcroat.png" alt="@mattcroat" />
			<Avatar.AvatarFallback>M</Avatar.AvatarFallback>
		</Avatar.Root>
	</Menu.Trigger>
	<Menu.Content class="w-[200px]">
		<Menu.Group>
			<Menu.Item>One</Menu.Item>
			<Menu.Item>Two</Menu.Item>
			<Menu.Item>Three</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
