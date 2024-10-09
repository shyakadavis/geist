<script lang="ts">
	import * as Collapse from '$lib/components/ui/collapse';
</script>

<Collapse.Root type="multiple" value={['item-2']}>
	<Collapse.Item value="item-1">
		<Collapse.Trigger>Question A</Collapse.Trigger>
		<Collapse.Content>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</Collapse.Content>
	</Collapse.Item>
	<Collapse.Item value="item-2">
		<Collapse.Trigger>Question B</Collapse.Trigger>
		<Collapse.Content>
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur.
		</Collapse.Content>
	</Collapse.Item>
</Collapse.Root>
