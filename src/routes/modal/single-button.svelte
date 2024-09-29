<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Modal from '$lib/components/ui/modal';
</script>

<Modal.Root>
	<Modal.Trigger>
		<Button size="sm">Open Modal</Button>
	</Modal.Trigger>

	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Create Token</Modal.Title>
		</Modal.Header>

		<p class="px-6 py-3 text-sm">Some content contained within the modal.</p>

		<Modal.Footer full_width />
	</Modal.Content>
</Modal.Root>
