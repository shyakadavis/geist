<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { cn } from '$lib/utils';
	import type {
		Command as CommandPrimitive,
		Dialog as DialogPrimitive,
		WithoutChildrenOrChild
	} from 'bits-ui';
	import type { Snippet } from 'svelte';
	import Command from './command.svelte';

	// TODO: Find a way to define this close_button prop in one place.
	type Props = WithoutChildrenOrChild<DialogPrimitive.RootProps> &
		WithoutChildrenOrChild<CommandPrimitive.RootProps> & {
			portalProps?: DialogPrimitive.PortalProps;
			children?: Snippet;
			close_button?: 'esc' | 'x';
		};

	let {
		open = $bindable(false),
		ref = $bindable(null),
		value = $bindable(''),
		class: class_name = undefined,
		close_button = 'x',
		portalProps,
		children,
		...restProps
	}: Props = $props();
</script>

<Dialog.Root bind:open {...restProps}>
	<Dialog.Content
		class={cn('overflow-hidden p-0 shadow-lg', class_name)}
		{close_button}
		{portalProps}
	>
		<Command
			{...restProps}
			bind:value
			bind:ref
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
			{children}
		/>
	</Dialog.Content>
</Dialog.Root>
