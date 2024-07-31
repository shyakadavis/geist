<script lang="ts">
	import { Gauge } from '$lib/components/ui/gauge';
</script>

<div class="flex justify-start">
	<Gauge
		colors={{ primary: 'stroke-blue-700', secondary: 'stroke-blue-300' }}
		size="md"
		value={50}
	/>
</div>
