<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Combobox } from '$lib/components/ui/combobox';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import { CalendarDate, DateFormatter, getLocalTimeZone, now } from '@internationalized/date';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import * as RangeCalendar from './index.js';

	// type Value
	type $$Props = RangeCalendarPrimitive.Props & {
		trigger_class?: string;
		presets?: Record<string, { start: CalendarDate; end: CalendarDate }>;
	};
	type $$Events = RangeCalendarPrimitive.Events;

	export let value: $$Props['value'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let weekdayFormat: $$Props['weekdayFormat'] = 'narrow';
	export let startValue: $$Props['startValue'] = undefined;
	export let presets: $$Props['presets'] = undefined;

	let class_name: $$Props['class'] = undefined;
	let trigger_class_name: $$Props['trigger_class'] = undefined;
	export { class_name as class, trigger_class_name as trigger_class };

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});

	const tf = new DateFormatter('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
		timeZoneName: 'short'
	});

	const _now = now(getLocalTimeZone()).toDate();
	// TODO: These formatted values are just for show. Updating their inputs won't update the calendar.
	// Still need to figure out a way to parse natural language date strings, as these seen in the inputs, and actually have them update the calendar.
	let start_date = df.format(value?.start?.toDate(getLocalTimeZone()) ?? _now);
	let start_time = tf.format(value?.start?.toDate(getLocalTimeZone()) ?? _now);
	let end_date = df.format(value?.end?.toDate(getLocalTimeZone()) ?? _now);
	let end_time = tf.format(value?.end?.toDate(getLocalTimeZone()) ?? _now);

	const presets_array = presets
		? Object.entries(presets).map(([label, { start, end }]) => ({
				value: label,
				label,
				start,
				end
			}))
		: [];

	// TODO: Fix this; 😠 Hacks within hacks
	function handle_selected_change(selected_preset: unknown) {
		if (!selected_preset) return;
		const _s = selected_preset as { value: string; label: string; disabled: boolean };
		const preset = presets_array.find((preset) => preset.value === _s.value);
		if (!preset) return;
		value = { start: preset.start, end: preset.end };
	}
</script>

{#if presets}
	<!-- TODO: Applying styles like `hover:bg-gray-alpha-100` do nothing-->
	<Combobox
		placeholder="Select Period"
		items={presets_array}
		onSelectedChange={handle_selected_change}
		class={cn('hover:bg-gray-alpha-100', { 'rounded-r-none': presets })}
		icon={Icons.Clock}
	/>
{/if}
<Popover.Root disableFocusTrap>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="secondary"
			class={cn(
				'justify-start text-left font-normal',
				!value && 'text-gray-700',
				{ 'shrink-0 rounded-l-none': presets },
				trigger_class_name
			)}
			builders={[builder]}
		>
			<Icons.Calendar class="mr-2 size-4" />
			{value && value.start && value.end
				? df.formatRange(
						value.start.toDate(getLocalTimeZone()),
						value.end.toDate(getLocalTimeZone())
					)
				: 'Select Date Range'}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="group rounded-xl p-0" sideOffset={8} align="start">
		<RangeCalendarPrimitive.Root
			on:keydown
			bind:value
			bind:placeholder
			bind:startValue
			{weekdayFormat}
			class={cn('flex flex-col', class_name)}
			{...$$restProps}
			let:months
			let:weekdays
		>
			<div
				class={cn(
					'grid grid-cols-2 gap-2 border-gray-alpha-100 p-4 group-data-[side=bottom]:order-last group-data-[side=bottom]:border-t group-data-[side=top]:border-b'
				)}
			>
				<Label for="start-date" class="col-span-2 text-xs text-gray-700">Start</Label>
				<Input bind:value={start_date} size="sm" aria-labelledby="start-date" />
				<Input bind:value={start_time} size="sm" aria-labelledby="start-time" />
				<Label for="end-date" class="col-span-2 text-xs text-gray-700">End</Label>
				<Input bind:value={end_date} size="sm" aria-labelledby="end-date" />
				<Input bind:value={end_time} size="sm" aria-labelledby="end-time" />
			</div>
			<RangeCalendar.Header class="px-4 pb-0 pt-4">
				<RangeCalendar.Heading />
				<div class="grow" aria-hidden="true"></div>
				<RangeCalendar.PrevButton />
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
										<RangeCalendar.Cell {date}>
											<RangeCalendar.Day {date} month={month.value} />
										</RangeCalendar.Cell>
									{/each}
								</RangeCalendar.GridRow>
							{/each}
						</RangeCalendar.GridBody>
					</RangeCalendar.Grid>
				{/each}
			</RangeCalendar.Months>
		</RangeCalendarPrimitive.Root>
	</Popover.Content>
</Popover.Root>
