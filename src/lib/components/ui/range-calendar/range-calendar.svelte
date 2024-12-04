<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { RangeCalendar as RangeCalendarPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { button_variants } from '../button/index.js';
	import Input from '../input/input.svelte';
	import Label from '../label/label.svelte';
	import * as RangeCalendar from './index.js';
	import PresetsCombobox from './presets-combobox.svelte';

	type Props = WithoutChildrenOrChild<RangeCalendarPrimitive.RootProps> & {
		trigger_class?: string;
		presets?: Record<string, { start: CalendarDate; end: CalendarDate }>;
	};

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: class_name,
		weekdayFormat = 'short',
		presets = undefined,
		...rest
	}: Props = $props();

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});

	const presets_array = presets
		? Object.entries(presets).map(([label, { start, end }]) => ({
				value: label,
				label,
				start,
				end
			}))
		: [];

	function handle_preset_change(v: string) {
		if (!presets) return;
		const key = v as keyof typeof presets;
		value = { start: presets[key].start, end: presets[key].end };
	}
</script>

{#if presets}
	<PresetsCombobox
		type="single"
		onValueChange={handle_preset_change}
		placeholder="Select Period"
		items={presets_array}
		class={cn('rounded-r-none')}
		icon={Icons.Clock}
	/>
{/if}
<Popover.Root>
	<Popover.Trigger
		class={cn(
			button_variants({
				variant: 'secondary',
				class: 'justify-start text-left font-normal'
			}),
			!value && 'text-muted-foreground',
			{ 'rounded-l-none': presets }
		)}
	>
		<Icons.Calendar class="mr-2 size-4" />
		{value && value.start && value.end
			? df.formatRange(value.start.toDate(getLocalTimeZone()), value.end.toDate(getLocalTimeZone()))
			: 'Select Date Range'}
	</Popover.Trigger>
	<Popover.Content sideOffset={8} align="start" class="group rounded-xl p-0">
		<RangeCalendarPrimitive.Root
			bind:ref
			bind:value
			bind:placeholder
			{weekdayFormat}
			class={cn('flex flex-col', class_name)}
			{...rest}
		>
			{#snippet children({ months, weekdays })}
				<div
					class={cn(
						'grid grid-cols-2 gap-2 border-gray-alpha-100 p-4 group-data-[side=bottom]:order-last group-data-[side=bottom]:border-t group-data-[side=top]:border-b'
					)}
				>
					<Label for="start-date" class="col-span-2 text-xs text-gray-700">Start</Label>
					<Input size="sm" aria-labelledby="start-date" />
					<Input size="sm" aria-labelledby="start-time" />
					<Label for="end-date" class="col-span-2 text-xs text-gray-700">End</Label>
					<Input size="sm" aria-labelledby="end-date" />
					<Input size="sm" aria-labelledby="end-time" />
				</div>
				<RangeCalendar.Header class="px-4 pb-0 pt-4">
					<RangeCalendar.PrevButton />
					<RangeCalendar.Heading />
					<RangeCalendar.NextButton />
				</RangeCalendar.Header>
				<RangeCalendar.Months class="p-4">
					{#each months as month}
						<RangeCalendar.Grid>
							<RangeCalendar.GridHead>
								<RangeCalendar.GridRow class="flex">
									{#each weekdays as weekday}
										<RangeCalendar.HeadCell>
											{weekday.slice(0, 2)}
										</RangeCalendar.HeadCell>
									{/each}
								</RangeCalendar.GridRow>
							</RangeCalendar.GridHead>
							<RangeCalendar.GridBody>
								{#each month.weeks as weekDates}
									<RangeCalendar.GridRow class="mt-2 w-full">
										{#each weekDates as date}
											<RangeCalendar.Cell {date} month={month.value}>
												<RangeCalendar.Day />
											</RangeCalendar.Cell>
										{/each}
									</RangeCalendar.GridRow>
								{/each}
							</RangeCalendar.GridBody>
						</RangeCalendar.Grid>
					{/each}
				</RangeCalendar.Months>
			{/snippet}
		</RangeCalendarPrimitive.Root>
	</Popover.Content>
</Popover.Root>
