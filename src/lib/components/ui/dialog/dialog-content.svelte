<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { Icons } from '$lib/assets/icons';
	import * as Dialog from './index.js';
	import { cn, flyAndScale } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button';
	import Kbd from '../kbd/kbd.svelte';

	interface $$Props extends DialogPrimitive.ContentProps {
		useEscape?: boolean;
	}

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
	export let useEscape: $$Props['useEscape'] = true;
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			'fixed left-[50%] top-[15%] z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border bg-background-100 p-6 shadow-lg sm:rounded-lg md:w-full',
			className
		)}
		{...$$restProps}
	>
		<slot />
		<DialogPrimitive.Close
			class={cn(
				'ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 flex place-items-center rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
				{
					'opacity-70 transition-opacity hover:opacity-100': !useEscape
				}
			)}
		>
			{#if useEscape}
				<Kbd keys={['escape']} />
			{:else}
				<Icons.X class="h-4 w-4" />
			{/if}
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
