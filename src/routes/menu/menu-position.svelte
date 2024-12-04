<script lang="ts">
	import { button_variants } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
	import { cn } from '$lib/utils';
</script>

<Menu.Root>
	<Menu.Trigger class={cn(button_variants())}>Left Start</Menu.Trigger>
	<Menu.Content side="left" align="start" class="w-[200px]">
		<Menu.Group>
			<Menu.Item>One</Menu.Item>
			<Menu.Item>Two</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
