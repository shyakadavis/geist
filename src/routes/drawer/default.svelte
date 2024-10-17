<script lang="ts">
	import { button_variants } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import { cn } from '$lib/utils';
</script>

<Drawer.Root>
	<Drawer.Trigger class={cn(button_variants())}>Open</Drawer.Trigger>
	<Drawer.Content hide_dismiss_bar class="items-center p-12">
		<Drawer.Header>
			<Drawer.Title>A drawer title</Drawer.Title>
		</Drawer.Header>
		<p>Drawer body</p>
	</Drawer.Content>
</Drawer.Root>
