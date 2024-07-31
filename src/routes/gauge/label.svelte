<script lang="ts">
	import { Gauge } from '$lib/components/ui/gauge';
</script>

<div class="flex gap-8">
	<Gauge show_value size="tiny" value={80} />
	<Gauge show_value size="sm" value={80} />
	<Gauge show_value size="sm" value={100} />
	<Gauge show_value size="md" value={80} />
	<Gauge show_value size="md" value={100} />
	<Gauge show_value size="lg" value={80} />
	<Gauge show_value size="lg" value={100} />
</div>
