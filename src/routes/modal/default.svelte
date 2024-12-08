<script lang="ts">
	import { Button, button_variants } from '$lib/components/ui/button';
	import * as Modal from '$lib/components/ui/modal';
	import { cn } from '$lib/utils';
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

		<p class="px-6 py-3 text-sm">Some content contained within the modal.</p>

		<Modal.Footer>
			<Button>Submit</Button>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
