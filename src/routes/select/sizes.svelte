<script lang="ts">
	import * as Select from '$lib/components/ui/select';
</script>

<div class="flex flex-col items-start justify-between gap-2 md:flex-row">
	<Select.Root value="x_small">
		<Select.Trigger size="xs">
			<Select.Value placeholder="XSmall" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="x_small">XSmall</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root>
		<Select.Trigger size="sm">
			<Select.Value placeholder="Small" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="small">Small</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root>
		<Select.Trigger>
			<Select.Value placeholder="Default" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="default">Default</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root>
		<Select.Trigger size="lg">
			<Select.Value placeholder="Large" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="large">Large</Select.Item>
		</Select.Content>
	</Select.Root>
</div>
