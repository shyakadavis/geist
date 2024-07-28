<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { is_desktop, is_single_button } from '.';
	import { button_variants } from '../button';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';

	export let full_width = false;

	onMount(() => {
		if (full_width) {
			is_single_button.set(true);
		}

		return () => {
			is_single_button.set(false);
		};
	});
</script>

{#if $is_desktop}
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
		<slot></slot>
	</Dialog.Footer>
{:else}
	<Drawer.Footer class="flex-row justify-between border-t bg-background-200 dark:bg-background-100">
		<Drawer.Close class={cn(button_variants({ variant: 'secondary' }))}>Cancel</Drawer.Close>
		<slot></slot>
	</Drawer.Footer>
{/if}
