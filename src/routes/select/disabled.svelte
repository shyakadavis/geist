<script lang="ts">
	import * as Select from '$lib/components/ui/select';
</script>

<Select.Root type="single" disabled>
	<Select.Trigger>Disabled with placeholder</Select.Trigger>
	<Select.Content>
		<Select.Item value="disabled">Disabled</Select.Item>
	</Select.Content>
</Select.Root>
