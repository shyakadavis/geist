<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import { Button, button_variants } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '$lib/utils';
	import Markdown from 'svelte-exmarkdown';
	import { spring } from 'svelte/motion';
	import { slide } from 'svelte/transition';

	type Props = {
		variant?: 'default' | 'inline' | undefined;
		label?: string;
	};

	let { variant = 'default', label = 'Was this helpful?' }: Props = $props();

	let md = $state('');
	const reactions = [
		{ emoji: Icons.FaceSmile, label: 'Select Love it! emoji' },
		{ emoji: Icons.FaceHappy, label: "Select It's okay emoji" },
		{ emoji: Icons.FaceUnhappy, label: 'Select Not great emoji' },
		{ emoji: Icons.FaceSad, label: 'Select Hate it emoji' }
	];
	let width = spring(274.883, { stiffness: 0.2, damping: 1.2 });
	let height = spring(48, { stiffness: 0.2, damping: 1.2 });
	let radius = spring(30, { stiffness: 0.2, damping: 1.2 });
	let current_reaction: number | undefined = $state(undefined);
	let inline_feedback_el: HTMLTextAreaElement | null = $state(null);

	function toggle_inline_feedback(i: number | undefined) {
		if (current_reaction === i || i === undefined) {
			// Close if clicking the same reaction or clicking outside
			close_inline_feedback();
		} else {
			// Open or switch to new reaction
			open_inline_feedback(i);
		}
	}

	function open_inline_feedback(i: number) {
		inline_feedback_el?.focus();
		current_reaction = i;
		width.set(336);
		height.set(271);
		radius.set(12);
	}

	function close_inline_feedback() {
		current_reaction = undefined;
		width.set(274.883);
		height.set(48);
		radius.set(30);
	}
</script>

{#if variant === 'default'}
	<Popover.Root>
		<Popover.Trigger
			class={cn(button_variants({ size: 'sm', variant: 'secondary' }), 'text-gray-900')}
		>
			Feedback
		</Popover.Trigger>
		<Popover.Portal>
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
							{#each reactions as { emoji: Emoji, label }}
								<Button
									variant="tertiary"
									svg_only
									aria-label={label}
									size="sm"
									shape="circle"
									class="group hover:bg-blue-300"
								>
									<Emoji
										aria-hidden="true"
										class="text-gray-900 group-hover:text-blue-900 [&>path]:group-hover:fill-blue-900"
									/>
								</Button>
							{/each}
						</span>
						<Button type="submit" size="sm">Send</Button>
					</footer>
				</form>
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
{:else if variant === 'inline'}
	<!-- TODO: Toggle on click outside: https://github.com/svecosystem/runed/pull/46 -->
	<div class="flex justify-center">
		<div
			style="
    width: {$width}px;
    height: {$height}px;
    border-radius: {$radius}px;
    "
			class="flex flex-col justify-between gap-2 overflow-hidden bg-background-100 shadow-shadow-border-small transition-colors"
		>
			<div class="flex items-center justify-center p-2">
				<p class="mr-1 text-sm text-gray-900">{label}</p>
				{#each reactions as { emoji: Emoji, label }, i}
					<Button
						variant="tertiary"
						svg_only
						aria-label={label}
						size="sm"
						shape="circle"
						class={cn('group/inline hover:bg-blue-300', {
							'bg-blue-300': i === current_reaction
						})}
						onclick={() => toggle_inline_feedback(i)}
					>
						<Emoji
							aria-hidden="true"
							class={cn(
								'text-gray-900 group-hover/inline:text-blue-900 [&>path]:group-hover/inline:fill-blue-900',
								{
									'text-blue-900 [&>path]:fill-blue-900': i === current_reaction
								}
							)}
						/>
					</Button>
				{/each}
			</div>

			<form class="flex grow flex-col">
				<main class="grid grow gap-3 p-2">
					<Textarea bind:ref={inline_feedback_el} placeholder="Your feedback..." />
					<div class="flex w-full items-center justify-end gap-1 text-xs text-gray-900">
						<Icons.Markdown aria-hidden class="h-[14px] w-[22px]" />
						<span class="sr-only">Markdown</span>
						supported.
					</div>
				</main>
				<footer
					class="flex items-center justify-end rounded-b-xl border-t border-accents-2 bg-accents-1 p-3"
				>
					<Button type="submit" size="sm">Send</Button>
				</footer>
			</form>
		</div>
	</div>
{/if}
