<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn, flyAndScale } from '$lib/utils';
	import { Combobox } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import { Button } from '../button';
	import { input_variants } from '../input';

	type $$Props = {
		items: { value: string; label: string }[];
		placeholder?: string;
		empty_message?: string;
		disabled?: boolean;
		errored?: boolean;
		class?: string;
		list_class?: string;
		size?: 'sm' | 'md' | 'lg';
	};

	let class_name: $$Props['class'] = undefined;
	let list_class_name: $$Props['list_class'] = undefined;
	export { class_name as class };
	export { list_class_name as list_class };
	export let items: $$Props['items'] = [];
	export let placeholder: $$Props['placeholder'] = 'Search...';
	export let empty_message: $$Props['empty_message'] = 'No results found';
	export let disabled: $$Props['disabled'] = false;
	export let errored: $$Props['errored'] = false;
	export let size: $$Props['size'] = 'md';

	let inputValue = '';
	let touchedInput = false;

	$: filtered_items =
		inputValue && touchedInput
			? items?.filter((item) => item.value.includes(inputValue.toLowerCase()))
			: items;

	// $: selected = filtered_items.find((item) => item.label === inputValue) ?? undefined;
	// TODO: How to clear a selection when clicking on the clear/x button?
	// TODO: Why is it that if it's within a modal, the content side is up? How to fix it?
	// TODO: When also within a modal, on mobile, the content should stretch in height for a better UX. See the original for reference.
</script>

<Combobox.Root {disabled} items={filtered_items} bind:inputValue bind:touchedInput>
	<Combobox.Input let:builder asChild>
		<div
			class={cn(
				'relative flex h-fit max-w-full items-center rounded-md shadow-shadow-border transition-[border-color,box-shadow] delay-0 focus-within:shadow-shadow-input',
				class_name
			)}
		>
			<Icons.MagnifyingGlass class="pointer-events-none absolute left-3 size-3.5 text-gray-700" />
			<input
				use:builder.action
				{...builder}
				{placeholder}
				class={cn(
					input_variants(),
					'peer px-9 disabled:bg-gray-100 data-[errored=true]:[box-shadow:_0_0_0_1px_var(--red-900),0_0_0_4px_var(--red-300);]',
					{
						'h-8 text-sm': size === 'sm',
						'h-10': size === 'md',
						'h-12 text-base': size === 'lg'
					}
				)}
				data-errored={errored}
			/>
			{#if inputValue}
				<span in:fade class="absolute right-3 top-2">
					<Button
						svg_only
						aria-label="Clear"
						shape="square"
						size="tiny"
						variant="tertiary"
						class="size-3 hover:bg-transparent"
						on:click={() => (inputValue = '')}
					>
						<Icons.Cross aria-hidden="true" class="size-full text-gray-700 hover:text-gray-1000" />
					</Button>
				</span>
			{:else}
				<span in:fade class="pointer-events-none absolute right-3">
					<Icons.ChevronDown
						aria-hidden="true"
						class="size-3.5 text-gray-700 transition-transform peer-aria-expanded:rotate-180"
					/>
				</span>
			{/if}
		</div>
	</Combobox.Input>

	<Combobox.Content
		class={cn(
			'z-[60] w-full rounded-xl border bg-background-100 px-1 py-3 shadow-md outline-none',
			list_class_name
		)}
		transition={flyAndScale}
		sideOffset={8}
		sameWidth
	>
		{#each filtered_items as item (item.value)}
			<Combobox.Item
				class={cn(
					'flex min-h-10 w-full select-none items-center rounded-md pl-5 pr-1.5 text-sm capitalize outline-none transition-colors data-[highlighted]:bg-gray-200',
					{
						'text-base': size === 'lg'
					}
				)}
				value={item.value}
				label={item.label}
			>
				{item.label}
				<Combobox.ItemIndicator class="ml-auto">
					<Icons.Check class="size-3.5 text-gray-700" />
				</Combobox.ItemIndicator>
			</Combobox.Item>
		{:else}
			<span class="block px-5 py-2 text-sm text-gray-700">{empty_message}</span>
		{/each}
	</Combobox.Content>
</Combobox.Root>
