<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	import { getLocalTimeZone, today } from '@internationalized/date';

	const start = today(getLocalTimeZone());
	const end = start.add({ days: 7 });

	let value = $state({ start, end });
</script>

<div class="grid place-items-center py-6">
	<RangeCalendar bind:value />
</div>
