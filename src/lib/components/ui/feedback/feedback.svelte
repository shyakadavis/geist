<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '$lib/utils.js';
	import Markdown from 'svelte-exmarkdown';
	import { slide } from 'svelte/transition';
	import { type Props, feedback_variants } from './index.js';

	type $$Props = Props;

	let class_name: string | undefined | null = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let label: $$Props['label'];
	export { class_name as class };

	let md = '';
	const reactions = [
		{ emoji: Icons.FaceSmile, label: 'Select Love it! emoji' },
		{ emoji: Icons.FaceHappy, label: "Select It's okay emoji" },
		{ emoji: Icons.FaceUnhappy, label: 'Select Not great emoji' },
		{ emoji: Icons.FaceSad, label: 'Select Hate it emoji' }
	];
</script>

{#if variant === 'default'}
	<Popover.Root>
		<Popover.Trigger asChild let:builder>
			<Button builders={[builder]} variant="secondary" size="sm" class="text-gray-900">
				Feedback
			</Button>
		</Popover.Trigger>
		<Popover.Content sideOffset={8} class="w-[340px] rounded-xl p-0">
			<form>
				<main class="grid gap-3 p-2">
					<Textarea placeholder="Your feedback..." bind:value={md} />
					{#if md}
						<div transition:slide class="grid gap-2 text-sm">
							<h2 class="text-xs text-gray-900">Preview</h2>
							<Markdown {md} />
						</div>
					{/if}
					<div class="flex w-full items-center justify-end gap-1 text-xs text-gray-900">
						<Icons.Markdown aria-hidden class="h-[14px] w-[22px]" />
						<span class="sr-only">Markdown</span>
						supported.
					</div>
				</main>
				<footer
					class="flex items-center justify-between rounded-b-xl border-t border-accents-2 bg-accents-1 p-3"
				>
					<span class="flex items-center gap-1">
						{#each reactions as { emoji, label }}
							<Button
								variant="tertiary"
								svg_only
								aria-label={label}
								size="sm"
								shape="circle"
								class="group hover:bg-blue-300"
							>
								<svelte:component
									this={emoji}
									aria-hidden="true"
									class={cn('text-gray-900 group-hover:text-blue-900', {
										'[&>path]:group-hover:fill-blue-900': true
									})}
								/>
							</Button>
						{/each}
					</span>
					<Button type="submit" size="sm">Send</Button>
				</footer>
			</form>
		</Popover.Content>
	</Popover.Root>
{:else if variant === 'inline'}
	<div class={cn(feedback_variants({ variant, className: class_name }))} {...$$restProps}>
		<slot></slot>
	</div>
{/if}
