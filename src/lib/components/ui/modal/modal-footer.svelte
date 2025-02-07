<script lang="ts">
	import { button_variants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { cn } from '$lib/utils';
	import { type Snippet } from 'svelte';
	import { is_desktop, is_single_button } from '.';

	type Props = {
		full_width?: boolean;
		children?: Snippet;
	};

	let { full_width = false, children }: Props = $props();

	$effect(() => {
		if (full_width) {
			is_single_button.set(true);
		}

		return () => {
			is_single_button.set(false);
		};
	});
</script>

{#if is_desktop.current}
	<Dialog.Footer
		class="sticky bottom-0 rounded-b-[inherit] border-t bg-background-200 px-6 py-3 dark:bg-background-100 sm:justify-between"
	>
		<Dialog.Close
			class={cn(button_variants({ variant: 'secondary' }), {
				'w-full': full_width
			})}
		>
			Cancel
		</Dialog.Close>
		{@render children?.()}
	</Dialog.Footer>
{:else}
	<Drawer.Footer class="flex-row justify-between border-t bg-background-200 dark:bg-background-100">
		<Drawer.Close
			class={cn(button_variants({ variant: 'secondary' }), {
				'w-full': full_width
			})}
		>
			Cancel
		</Drawer.Close>
		{@render children?.()}
	</Drawer.Footer>
{/if}
