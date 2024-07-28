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
			<Menu.Item href="https://github.com/ieedan">One</Menu.Item>
			<Menu.Item href="https://github.com/ddtamn">Two</Menu.Item>
			<Menu.Item href="https://github.com/metonym/">Three</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
