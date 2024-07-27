<script lang="ts">
	import { Input } from '$lib/components/ui/input';
</script>

<div class="flex items-center gap-4">
	<Input aria-labelledby="Demo" disabled placeholder="Disabled with placeholder" />
	<Input aria-labelledby="Demo" disabled value="Disabled with value" />
</div>
