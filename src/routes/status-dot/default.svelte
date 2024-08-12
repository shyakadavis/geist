<script lang="ts">
	import { StatusDot } from '$lib/components/ui/status-dot';
</script>

<div class="grid gap-6">
	<StatusDot state="QUEUED" />
	<StatusDot state="BUILDING" />
	<StatusDot state="ERROR" />
	<StatusDot state="READY" />
	<StatusDot state="CANCELED" />
</div>
