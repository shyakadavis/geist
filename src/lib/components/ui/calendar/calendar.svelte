<script lang="ts">
	import { Icons } from '$lib/assets/icons/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils.js';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { Calendar as CalendarPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { button_variants } from '../button/index.js';
	import * as Calendar from './index.js';

	type Props = WithoutChildrenOrChild<CalendarPrimitive.RootProps> & {
		trigger_class?: string;
	};

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: class_name,
		trigger_class = undefined,
		weekdayFormat = 'short',
		...restProps
	}: Props = $props();

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			button_variants({
				variant: 'secondary',
				class: 'justify-start text-left font-normal'
			}),
			!value && 'text-muted-foreground',
			trigger_class
		)}
	>
		<Icons.Calendar class="mr-2 size-4" />
		<!-- TODO: This wasn't the case in the previous bits-ui -->
		{value
			? df.format(
					Array.isArray(value)
						? value[0]?.toDate(getLocalTimeZone())
						: value.toDate(getLocalTimeZone())
				)
			: 'Pick a date'}
	</Popover.Trigger>
	<Popover.Content sideOffset={8} align="start" class="w-auto rounded-xl p-0">
		<CalendarPrimitive.Root
			bind:ref
			bind:value={value as any}
			bind:placeholder={placeholder as any}
			{weekdayFormat}
			class={cn('p-3', class_name)}
			{...restProps as any}
		>
			{#snippet children({ months, weekdays })}
				<Calendar.Header>
					<Calendar.Heading />
					<div class="grow" aria-hidden="true"></div>
					<Calendar.PrevButton />
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
								{#each month.weeks as weekDates}
									<Calendar.GridRow class="mt-2 w-full">
										{#each weekDates as date}
											<Calendar.Cell {date} month={month.value}>
												<Calendar.Day />
											</Calendar.Cell>
										{/each}
									</Calendar.GridRow>
								{/each}
							</Calendar.GridBody>
						</Calendar.Grid>
					{/each}
				</Calendar.Months>
			{/snippet}
		</CalendarPrimitive.Root>
	</Popover.Content>
</Popover.Root>
