<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button, button_variants } from '$lib/components/ui/button';
	import * as Modal from '$lib/components/ui/modal';
	import { cn } from '$lib/utils';

	let open = $state(false);

	const close = () => (open = !open);
</script>

<Modal.Root bind:open>
	<Modal.Trigger class={cn(button_variants({ size: 'sm' }))}>Open Modal</Modal.Trigger>

	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Create Token</Modal.Title>
		</Modal.Header>

		<!-- ! Overflow must be handled consumer-side. -->
		<div class="max-h-96 overflow-y-auto px-6 py-3 text-sm md:max-h-[60dvh]">
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
				<Button affix={Icons.ArrowLeft} variant="secondary" onclick={close}>Previous</Button>
				<Button onclick={close}>Submit</Button>
			</div>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
