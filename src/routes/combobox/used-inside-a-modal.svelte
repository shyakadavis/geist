<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Combobox } from '$lib/components/ui/combobox';
	import { Label } from '$lib/components/ui/label';
	import * as Modal from '$lib/components/ui/modal';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];
</script>

<Modal.Root>
	<Modal.Trigger>
		<Button size="sm">Open Modal</Button>
	</Modal.Trigger>

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
