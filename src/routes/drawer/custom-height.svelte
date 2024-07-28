<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
</script>

<Drawer.Root>
	<Drawer.Trigger asChild let:builder>
		<Button builders={[builder]}>Open</Button>
	</Drawer.Trigger>
	<Drawer.Content class="h-[400px] items-center">
		<Drawer.Header>
			<Drawer.Title>A drawer title</Drawer.Title>
		</Drawer.Header>
		<p>Drawer body</p>
	</Drawer.Content>
</Drawer.Root>
