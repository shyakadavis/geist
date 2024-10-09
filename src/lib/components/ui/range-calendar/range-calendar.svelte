<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { RangeCalendar as RangeCalendarPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { button_variants } from '../button/index.js';
	import * as RangeCalendar from './index.js';

	type Props = WithoutChildrenOrChild<RangeCalendarPrimitive.RootProps>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: class_name,
		weekdayFormat = 'short',
		...rest
	}: Props = $props();

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			button_variants({
				variant: 'secondary',
				class: 'justify-start text-left font-normal'
			}),
			!value && 'text-muted-foreground'
		)}
	>
		<Icons.Calendar class="mr-2 size-4" />
		{value && value.start && value.end
			? df.formatRange(value.start.toDate(getLocalTimeZone()), value.end.toDate(getLocalTimeZone()))
			: 'Select Date Range'}
	</Popover.Trigger>
	<Popover.Content sideOffset={8} align="start" class="w-auto rounded-xl p-0">
		<RangeCalendarPrimitive.Root
			bind:ref
			bind:value
			bind:placeholder
			{weekdayFormat}
			class={cn('p-3', class_name)}
			{...rest}
		>
			{#snippet children({ months, weekdays })}
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
