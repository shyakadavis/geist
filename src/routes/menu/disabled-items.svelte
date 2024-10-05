<script lang="ts">
	import { button_variants } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
	import { cn } from '$lib/utils';
</script>

<Menu.Root>
	<Menu.Trigger class={cn(button_variants())}>Actions</Menu.Trigger>
	<Menu.Content class="w-[200px]">
		<Menu.Group>
			<Menu.Item disabled>One</Menu.Item>
			<Menu.Item>Two</Menu.Item>
			<Menu.Item>Three</Menu.Item>
			<Menu.Item disabled type="error">Error</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
