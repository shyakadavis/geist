<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import * as Calendar from './index.js';

	type $$Props = CalendarPrimitive.Props & {
		trigger_class?: string;
	};

	type $$Events = CalendarPrimitive.Events;

	export let value: $$Props['value'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let weekdayFormat: $$Props['weekdayFormat'] = 'short';

	let class_name: $$Props['class'] = undefined;
	let trigger_class_name: $$Props['trigger_class'] = undefined;
	export { class_name as class, trigger_class_name as trigger_class };

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
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
			{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-auto rounded-xl p-0" sideOffset={8} align="start">
		<CalendarPrimitive.Root
			bind:value
			bind:placeholder
			{weekdayFormat}
			class={cn('p-3', class_name)}
			{...$$restProps}
			on:keydown
			let:months
			let:weekdays
		>
			<Calendar.Header>
				<Calendar.PrevButton />
				<Calendar.Heading />
				<Calendar.NextButton />
			</Calendar.Header>
			<Calendar.Months>
				{#each months as month}
					<Calendar.Grid>
						<Calendar.GridHead>
							<Calendar.GridRow class="flex">
								{#each weekdays as weekday}
									<Calendar.HeadCell>
										{weekday.slice(0, 2)}
									</Calendar.HeadCell>
								{/each}
							</Calendar.GridRow>
						</Calendar.GridHead>
						<Calendar.GridBody>
							{#each month.weeks as week_dates}
								<Calendar.GridRow class="mt-2 w-full">
									{#each week_dates as date}
										<Calendar.Cell {date}>
											<Calendar.Day {date} month={month.value} />
										</Calendar.Cell>
									{/each}
								</Calendar.GridRow>
							{/each}
						</Calendar.GridBody>
					</Calendar.Grid>
				{/each}
			</Calendar.Months>
		</CalendarPrimitive.Root>
	</Popover.Content>
</Popover.Root>
