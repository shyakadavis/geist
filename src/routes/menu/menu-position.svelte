<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';
</script>

<Menu.Root>
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button {...props}>Left Start</Button>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content side="left" align="start" class="w-[200px]">
		<Menu.Group>
			<Menu.Item>One</Menu.Item>
			<Menu.Item>Two</Menu.Item>
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
