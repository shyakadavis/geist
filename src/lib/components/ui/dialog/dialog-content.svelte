<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { cn, flyAndScale } from '$lib/utils.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { Button } from '../button/index.js';
	import * as Dialog from './index.js';

	type $$Props = DialogPrimitive.ContentProps & {
		close_button?: 'esc' | 'x';
	};

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
	export let close_button: $$Props['close_button'] = 'x';
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background-100 p-6 shadow-lg sm:rounded-lg md:w-full',
			className
		)}
		{...$$restProps}
	>
		<slot />
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
					<Icons.X aria-hidden="true" class="size-5" />
				</Button>
			{/if}
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
