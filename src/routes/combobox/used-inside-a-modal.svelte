<script lang="ts">
	import { Button, button_variants } from '$lib/components/ui/button';
	import { Combobox } from '$lib/components/ui/combobox';
	import { Label } from '$lib/components/ui/label';
	import * as Modal from '$lib/components/ui/modal';
	import { cn } from '$lib/utils';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];
</script>

<Modal.Root>
	<Modal.Trigger class={cn(button_variants({ size: 'sm' }))}>Open Modal</Modal.Trigger>

	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Create Token</Modal.Title>

			<Modal.Description>
				Enter a unique name for your token to differentiate it from other tokens and then select the
				scope.
			</Modal.Description>
		</Modal.Header>

		<Modal.Inset>
			<Label value="Region">
				<Combobox type="single" placeholder="Search..." {items} size="sm" />
			</Label>
			<p class="text-xs text-gray-900">
				This is the region where your database reads and writes will take place.
			</p>
		</Modal.Inset>
		<Modal.Footer>
			<Button>Submit</Button>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
