<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { cn } from '$lib/utils';
	import type { Dialog as DialogPrimitive } from 'bits-ui';
	import type { Command as CommandPrimitive } from 'cmdk-sv';
	import Command from './command.svelte';

	// TODO: Yuck! I can't believe I'm defining a prop in 2 different places. (Check dialog-content.svelte)
	// Find a way to define this prop in one place.
	type $$Props = DialogPrimitive.Props &
		CommandPrimitive.CommandProps & {
			close_button?: 'esc' | 'x';
		};

	export let open: $$Props['open'] = false;
	export let value: $$Props['value'] = undefined;
	let class_name: string | undefined | null = undefined;
	export { class_name as class };
	export let close_button: $$Props['close_button'] = 'x';
</script>

<Dialog.Root bind:open {...$$restProps}>
	<Dialog.Content class={cn('overflow-hidden p-0 shadow-lg', class_name)} {close_button}>
		<Command
			class={cn(
				// Command Heading
				'[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:capitalize [&_[data-cmdk-group-heading]]:text-gray-900',
				// Command Group
				'[&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2',
				// Command Input
				'[&_[data-cmdk-input-wrapper]_svg]:size-5 [&_[data-cmdk-input]]:h-12',
				// Command Item
				'[&_[data-cmdk-item]]:px-2 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:size-5'
			)}
			{...$$restProps}
			bind:value
		>
			<slot />
		</Command>
	</Dialog.Content>
</Dialog.Root>
