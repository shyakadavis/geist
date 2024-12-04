<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
</script>

<div class="flex flex-col gap-4">
	<Checkbox disabled>Disabled</Checkbox>
	<Checkbox checked disabled>Disabled Checked</Checkbox>
	<Checkbox disabled indeterminate>Disabled Indeterminate</Checkbox>
</div>
