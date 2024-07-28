<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Modal from '$lib/components/ui/modal';
</script>

<Modal.Root>
	<Modal.Trigger let:builder>
		<Button size="sm" builders={[builder]}>Open Modal</Button>
	</Modal.Trigger>

	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Create Token</Modal.Title>
		</Modal.Header>

		<div class="px-6 py-3 text-sm">
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
			<p>Some content contained within the modal.</p>
		</div>

		<Modal.Footer>
			<p slot="cancel">Cancel</p>
			<Button>Submit</Button>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
