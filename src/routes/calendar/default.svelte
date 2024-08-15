<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { type DateValue } from '@internationalized/date';

	let value: DateValue | undefined = undefined;
</script>

<div class="grid place-items-center py-6">
	<Calendar bind:value trigger_class="w-[280px]" />
</div>
