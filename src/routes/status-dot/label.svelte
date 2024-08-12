<script lang="ts">
	import { StatusDot } from '$lib/components/ui/status-dot';
</script>

<div class="grid gap-6">
	<StatusDot label state="QUEUED" />
	<StatusDot label state="BUILDING" />
	<StatusDot label state="ERROR" />
	<StatusDot label state="READY" />
	<StatusDot label state="CANCELED" />
</div>
