<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
</script>

<Menu.Root>
	<Menu.Trigger asChild let:builder>
		<Button builders={[builder]}>Actions</Button>
	</Menu.Trigger>
	<Menu.Content class="w-[200px]">
		<Menu.Group>
			<Menu.Item disabled>One</Menu.Item>
			<Menu.Item>Two</Menu.Item>
			<Menu.Item>Three</Menu.Item>
			<Menu.Item disabled type="error">Error</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
