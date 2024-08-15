<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn, flyAndScale } from '$lib/utils';
	import { Combobox } from 'bits-ui';
	import { Button } from '../button';
	import { input_variants } from '../input';

	type $$Props = {
		items: { value: string; label: string }[];
		placeholder?: string;
		empty_message?: string;
	};

	export let items: $$Props['items'] = [];
	export let placeholder: $$Props['placeholder'] = 'Search...';
	export let empty_message: $$Props['empty_message'] = 'No results found';

	let inputValue = '';
	let touchedInput = false;

	$: filtered_items =
		inputValue && touchedInput
			? items?.filter((item) => item.value.includes(inputValue.toLowerCase()))
			: items;

	// $: selected = filtered_items.find((item) => item.label === inputValue) ?? undefined;
	// TODO: How to clear a selection when clicking on the clear/x button?
</script>

<Combobox.Root items={filtered_items} bind:inputValue bind:touchedInput>
	<Combobox.Input let:builder asChild>
		<div
			class={cn(
				'relative flex max-w-full items-center rounded-md shadow-shadow-border transition-[border-color,box-shadow] delay-0 focus-within:shadow-shadow-input'
			)}
		>
			<Icons.MagnifyingGlass class="pointer-events-none absolute left-3 size-3.5 text-gray-700" />
			<input
				use:builder.action
				{...builder}
				{placeholder}
				class={cn(input_variants({ size: 'md' }), 'peer pl-9')}
			/>
			{#if inputValue}
				<Button
					svg_only
					aria-label="Clear"
					shape="square"
					size="tiny"
					variant="tertiary"
					class="absolute right-3 size-3 hover:bg-transparent"
					on:click={() => (inputValue = '')}
				>
					<Icons.Cross aria-hidden="true" class="size-full text-gray-700 hover:text-gray-1000" />
				</Button>
			{:else}
				<Icons.ChevronDown
					aria-hidden="true"
					class="pointer-events-none absolute right-3 size-3.5 text-gray-700 transition-transform peer-aria-expanded:rotate-180"
				/>
			{/if}
		</div>
	</Combobox.Input>

	<Combobox.Content
		class="w-full rounded-md border bg-background-100 px-1 py-3 shadow-md outline-none"
		transition={flyAndScale}
		sideOffset={8}
		sameWidth
	>
		{#each filtered_items as item (item.value)}
			<Combobox.Item
				class="flex h-10 w-full select-none items-center rounded-md py-3 pl-5 pr-1.5 text-sm capitalize outline-none transition-colors data-[highlighted]:bg-gray-200"
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
