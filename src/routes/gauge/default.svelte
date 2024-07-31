<script lang="ts">
	import { Gauge } from '$lib/components/ui/gauge';
</script>

<div class="flex gap-8">
	<Gauge size="tiny" value={50} />
	<Gauge size="sm" value={50} />
	<Gauge value={50} />
	<Gauge size="lg" value={50} />
</div>
