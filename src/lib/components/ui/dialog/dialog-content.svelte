<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn, flyAndScale } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { Button } from '../button/index.js';
	import * as Dialog from './index.js';

	type $$Props = DialogPrimitive.ContentProps & {
		close_button?: 'esc' | 'x';
		hide_close_button?: boolean;
		overlay_classes?: string;
	};

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
	export let close_button: $$Props['close_button'] = 'x';
	export let hide_close_button: $$Props['hide_close_button'] = false;
	export let overlay_classes: $$Props['overlay_classes'] = undefined;
	export let el: $$Props['el'] = undefined;
</script>

<Dialog.Portal>
	<Dialog.Overlay class={overlay_classes} />
	<DialogPrimitive.Content
		bind:el
		{transition}
		{transitionConfig}
		class={cn(
			'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background-100 p-6 shadow-lg sm:rounded-lg md:w-full',
			className
		)}
		{...$$restProps}
	>
		<slot />
		{#if !hide_close_button}
			<DialogPrimitive.Close asChild let:builder>
				{#if close_button === 'esc'}
					<Button
						builders={[builder]}
						size="sm"
						variant="secondary"
						class="absolute right-4 top-3 h-5 px-1.5 text-xs "
					>
						Esc
					</Button>
				{:else if close_button === 'x'}
					<Button
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
			</DialogPrimitive.Close>
		{/if}
	</DialogPrimitive.Content>
</Dialog.Portal>
