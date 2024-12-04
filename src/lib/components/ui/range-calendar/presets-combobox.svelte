<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { cn } from '$lib/utils';
	import { Combobox } from 'bits-ui';
	import { input_variants } from '../input';

	type Props = Combobox.RootProps & {
		items?: { value: string; label: string }[];
		placeholder?: string;
		empty_message?: string;
		disabled?: boolean;
		errored?: boolean;
		class?: string;
		list_class?: string;
		size?: 'sm' | 'md' | 'lg';
		icon?: typeof Icons.Accessibility;
	};

	let {
		items = [],
		placeholder = 'Search...',
		empty_message = 'No results found',
		disabled = false,
		errored = false,
		class: class_name = undefined,
		list_class: list_class_name = undefined,
		size = 'md',
		icon: Icon = undefined,
		...rest
	}: Props = $props();

	let search_value = $state('');

	const filtered_items = $derived(
		search_value === ''
			? items
			: items.filter((v) => v.label.toLowerCase().includes(search_value.toLowerCase()))
	);
</script>

<!-- TODO: Fix combobox search. Currently can't use "space" when searching. Maybe because space closes Combobox.Content -->
<Combobox.Root
	{disabled}
	onOpenChange={(o) => {
		if (!o) search_value = '';
	}}
	{...rest}
>
	<!-- TODO: Bring back a full width (moved the `class_name` down to the input as that's what's mostly targeted.) -->
	<Combobox.Trigger class={cn('relative w-fit')}>
		{#if Icon}
			<Icon
				class="pointer-events-none absolute start-3 top-1/2 size-3.5 -translate-y-1/2 text-gray-700"
			/>
		{:else}
			<Icons.MagnifyingGlass
				class="pointer-events-none absolute start-3 top-1/2 size-3.5 -translate-y-1/2 text-gray-700"
			/>
		{/if}
		<Combobox.Input
			oninput={(e) => (search_value = e.currentTarget.value)}
			class={cn(
				input_variants(),
				'peer rounded-md px-9 shadow-shadow-border transition-[border-color,box-shadow] delay-0 focus-within:shadow-shadow-input disabled:bg-gray-100',
				// TODO: Why isn't this "red" box shadow being applied? It previously was.
				'data-[errored=true]:text-red-800 data-[errored=true]:[box-shadow:_0_0_0_1px_var(--red-900),0_0_0_4px_var(--red-300);]',
				{
					'h-8 text-sm': size === 'sm',
					'h-10': size === 'md',
					'h-12 text-base': size === 'lg'
				},
				class_name
			)}
			{placeholder}
			aria-label={placeholder}
			data-errored={errored}
		/>
		<Icons.ChevronDown
			aria-hidden="true"
			class="absolute end-3 top-1/2 size-3.5 -translate-y-1/2 text-gray-700 transition-transform peer-aria-expanded:rotate-180"
		/>
	</Combobox.Trigger>
	<Combobox.Portal>
		<Combobox.Content
			class={cn(
				'z-[60] w-[var(--bits-combobox-anchor-width)] min-w-[var(--bits-combobox-anchor-width)] rounded-xl border bg-background-100 px-1 py-3 shadow-md outline-none',
				// Why are custom list classes not being applied? A thing to not, when hovering over list_class prop, intellisense does not kick in. Perhaps anything other than "class" is not being recognized as a style-able prop?
				list_class_name
			)}
			sideOffset={10}
		>
			<section id="combobox-list" class="">
				<Combobox.ScrollUpButton class="flex w-full items-center justify-center">
					<Icons.ChevronUpSmall class="size-3" />
				</Combobox.ScrollUpButton>
				<Combobox.Viewport class="p-1">
					{#each filtered_items as item, i (i + item.value)}
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
							{#snippet children({ selected })}
								{item.label}
								{#if selected}
									<div class="ml-auto">
										<Icons.Check class="size-3.5 text-gray-700" aria-hidden />
									</div>
								{/if}
							{/snippet}
						</Combobox.Item>
					{:else}
						<span class="block px-5 py-2 text-sm text-gray-700">{empty_message}</span>
					{/each}
				</Combobox.Viewport>
				<Combobox.ScrollDownButton class="flex w-full items-center justify-center">
					<Icons.ChevronDownSmall class="size-3" />
				</Combobox.ScrollDownButton>
			</section>
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
