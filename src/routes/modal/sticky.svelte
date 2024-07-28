<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Modal from '$lib/components/ui/modal';

	let open = false;

	const close = () => (open = !open);
</script>

<Modal.Root bind:open>
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
			<div class="flex w-full justify-between">
				<Button affix={Icons.ArrowLeft} variant="secondary" on:click={close}>Previous</Button>
				<Button on:click={close}>Submit</Button>
			</div>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
