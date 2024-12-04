<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn } from '$lib/utils.js';
	import { Dialog as DialogPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { Button } from '../button/index.js';
	import * as Dialog from './index.js';

	type Props = WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
		portalProps?: DialogPrimitive.PortalProps;
		children: Snippet;
		close_button?: 'esc' | 'x';
		hide_close_button?: boolean;
		overlay_classes?: string;
	};

	let {
		class: class_name = undefined,
		close_button = 'x',
		hide_close_button = false,
		overlay_classes = undefined,
		ref = $bindable(null),
		class: className,
		portalProps,
		children,
		...restProps
	}: Props = $props();
</script>

<Dialog.Portal {...portalProps}>
	<Dialog.Overlay class={overlay_classes} />
	<DialogPrimitive.Content
		bind:ref
		class={cn(
			'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background-100 p-6 shadow-lg duration-200 sm:rounded-lg',
			// open animation
			'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
			// close animation
			'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
			class_name
		)}
		{...restProps}
	>
		{@render children?.()}
		{#if !hide_close_button}
			<DialogPrimitive.Close>
				{#snippet child({ props })}
					{#if close_button === 'esc'}
						<Button
							{...props}
							size="sm"
							variant="secondary"
							class="absolute right-4 top-3 h-5 px-1.5 text-xs "
						>
							Esc
						</Button>
					{:else if close_button === 'x'}
						<Button
							{...props}
							svg_only
							aria-label="Close"
							shape="square"
							size="tiny"
							variant="secondary"
							class="absolute right-4 top-3 px-1.5"
						>
							<Icons.Cross aria-hidden="true" class="size-5" />
						</Button>
					{/if}
				{/snippet}
			</DialogPrimitive.Close>
		{/if}
	</DialogPrimitive.Content>
</Dialog.Portal>
