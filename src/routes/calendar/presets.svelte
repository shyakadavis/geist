<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	import { getLocalTimeZone, today } from '@internationalized/date';

	const end = today(getLocalTimeZone());

	const presets = {
		'last-3-days': {
			text: 'Last 3 Days',
			start: end.subtract({ days: 3 }),
			end: end
		},
		'last-7-days': {
			text: 'Last 7 Days',
			start: end.subtract({ days: 7 }),
			end: end
		},
		'last-14-days': {
			text: 'Last 14 Days',
			start: end.subtract({ days: 14 }),
			end: end
		}
		//   'last-month': {
		//     text: 'Last Month',
		//     start: startOfDay(subMonths(new Date(), 1)),
		//     end: end,
		//   },
	};
</script>

<div class="grid place-items-center py-6">
	<RangeCalendar {presets} />
</div>
