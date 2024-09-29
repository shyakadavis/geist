<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { cn } from '$lib/utils';
	import {
		Command as CommandPrimitive,
		Dialog as DialogPrimitive,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { Snippet } from 'svelte';
	import Command from './command.svelte';

	// TODO: Find a way to define this prop in one place.
	type Props = WithoutChildrenOrChild<DialogPrimitive.RootProps> &
		WithoutChildrenOrChild<CommandPrimitive.RootProps> & {
			children?: Snippet;
			close_button?: 'esc' | 'x';
		};

	let {
		open = $bindable(false),
		value = $bindable(''),
		class: class_name = undefined,
		close_button = 'x',
		children,
		...rest
	}: Props = $props();

	// TODO:
	// 	[svelte] ownership_invalid_mutation
	// src/lib/components/shared/command/command.svelte mutated a value owned by node_modules/.pnpm/bits-ui@1.0.0-next.1_svelte@5.0.0-next.260/node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte. This is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead
</script>

<Dialog.Root bind:open {...rest}>
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
			{...rest}
			bind:value
		>
			{@render children?.()}
		</Command>
	</Dialog.Content>
</Dialog.Root>
