<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';
</script>

<div class="grid gap-6">
	<Progress variant="success" value={100} />
	<Progress variant="error" value={10} />
	<Progress variant="warning" value={40} />
	<Progress variant="secondary" value={70} />
</div>
