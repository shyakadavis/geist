<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
</script>

<Menu.Root>
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button {...props}>Actions</Button>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content class="w-[200px]">
		<Menu.Group>
			<Menu.Item>One</Menu.Item>
			<Menu.Item>Two</Menu.Item>
			<Menu.Item>Three</Menu.Item>
			<Menu.Item type="error">Error</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
