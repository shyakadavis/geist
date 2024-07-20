<script lang="ts">
	import { Error } from '$lib/components/ui/error';
</script>

<div class="flex items-center gap-4">
	<Error size="sm">This email is in use.</Error>
	<Error>This email is in use.</Error>
	<Error size="lg">This email is in use.</Error>
</div>
