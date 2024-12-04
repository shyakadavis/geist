<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import * as Select from '$lib/components/ui/select';
</script>

<div class="flex flex-col items-start justify-between gap-2 md:flex-row">
	<Select.Root type="single">
		<Select.Trigger affix={Icons.ArrowCircleUp} size="sm" suffix={Icons.ArrowCircleUp}>
			Small
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="small">Small</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root type="single">
		<Select.Trigger affix={Icons.ArrowCircleUp} suffix={Icons.ArrowCircleUp}>
			Default
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="default">Default</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root type="single">
		<Select.Trigger affix={Icons.ArrowCircleUp} size="lg" suffix={Icons.ArrowCircleUp}>
			Large
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="large">Large</Select.Item>
		</Select.Content>
	</Select.Root>
</div>
