<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import * as RangeCalendar from './index.js';

	type $$Props = RangeCalendarPrimitive.Props & {
		trigger_class?: string;
	};
	type $$Events = RangeCalendarPrimitive.Events;

	export let value: $$Props['value'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let weekdayFormat: $$Props['weekdayFormat'] = 'narrow';
	export let startValue: $$Props['startValue'] = undefined;

	let class_name: $$Props['class'] = undefined;
	let trigger_class_name: $$Props['trigger_class'] = undefined;
	export { class_name as class, trigger_class_name as trigger_class };

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="secondary"
			class={cn(
				'justify-start text-left font-normal',
				!value && 'text-gray-700',
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
	<Popover.Content class="w-auto rounded-xl p-0" sideOffset={8} align="start">
		<RangeCalendarPrimitive.Root
			on:keydown
			bind:value
			bind:placeholder
			bind:startValue
			{weekdayFormat}
			class={cn('p-3', class_name)}
			{...$$restProps}
			let:months
			let:weekdays
		>
			<RangeCalendar.Header>
				<RangeCalendar.PrevButton />
				<RangeCalendar.Heading />
				<RangeCalendar.NextButton />
			</RangeCalendar.Header>
			<RangeCalendar.Months>
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
