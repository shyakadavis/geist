<script lang="ts">
	import { cn } from '$lib/utils';
	import { is_desktop } from '.';
	import { button_variants } from '../button';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';
</script>

{#if $is_desktop}
	<Dialog.Footer
		class="sticky bottom-0 rounded-b-[inherit] border-t bg-background-200 px-6 py-3 dark:bg-background-100 sm:justify-between"
	>
		<Dialog.Close class={cn(button_variants({ variant: 'secondary' }))}>
			<slot name="cancel"></slot>
		</Dialog.Close>
		<slot></slot>
	</Dialog.Footer>
{:else}
	<Drawer.Footer class="flex-row justify-between border-t bg-background-200 dark:bg-background-100">
		<Drawer.Close class={cn(button_variants({ variant: 'secondary' }))}>
			<slot name="cancel"></slot>
		</Drawer.Close>
		<slot></slot>
	</Drawer.Footer>
{/if}
