<script lang="ts">
	import { button_variants } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import { cn } from '$lib/utils';
</script>

<Drawer.Root>
	<Drawer.Trigger class={cn(button_variants())}>Open</Drawer.Trigger>
	<Drawer.Content class="h-[400px] items-center">
		<Drawer.Header>
			<Drawer.Title>A drawer title</Drawer.Title>
		</Drawer.Header>
		<p>Drawer body</p>
	</Drawer.Content>
</Drawer.Root>
