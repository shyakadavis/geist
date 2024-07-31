<script lang="ts">
	import { Gauge } from '$lib/components/ui/gauge';
</script>

<div class="flex justify-start">
	<Gauge
		arc_priority="equal"
		colors={{ primary: 'stroke-blue-700', secondary: 'stroke-red-700' }}
		show_value
		size="md"
		value={50}
	/>
</div>
