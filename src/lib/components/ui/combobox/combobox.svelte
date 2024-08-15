<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import type { PopoverProps } from 'bits-ui';
	import { tick } from 'svelte';

	type $$Props = PopoverProps & {
		placeholder?: string;
		options?: { value: string; label: string }[];
		empty_message?: string;
		trigger_class?: string;
		content_class?: string;
	};

	export let placeholder: $$Props['placeholder'] = '';
	export let options: $$Props['options'] = [];
	export let empty_message: $$Props['empty_message'] = 'No items found.';
	let trigger_class_name: $$Props['trigger_class'] = undefined;
	let content_class_name: $$Props['content_class'] = undefined;
	export { trigger_class_name as trigger_class, content_class_name as content_class };

	let open = false;
	let value = '';

	$: selected_value = options?.find((f) => f.value === value)?.label ?? placeholder;

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function close_and_focus_trigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="secondary"
			role="combobox"
			aria-expanded={open}
			class={cn('w-full justify-between', trigger_class_name)}
		>
			{selected_value}
			<Icons.ChevronDown class="ml-auto size-4 shrink-0 opacity-50" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class={cn('p-0', content_class_name)} sideOffset={8} sameWidth>
		<Command.Root>
			<Command.Input {placeholder} />
			<Command.Empty>{empty_message}</Command.Empty>
			<Command.Group>
				{#if !options}
					<Command.Item disabled>
						{empty_message}
					</Command.Item>
				{:else}
					{#each options as { label, value } (value)}
						<Command.Item
							{value}
							onSelect={(currentValue) => {
								value = currentValue;
								close_and_focus_trigger(ids.trigger);
							}}
						>
							<Icons.Check class={cn('mr-2 size-3', value !== value && 'text-transparent')} />
							{label}
						</Command.Item>
					{/each}
				{/if}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
