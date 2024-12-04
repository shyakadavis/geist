<script lang="ts">
	type Props = {
		items: { title: string; description: string; color: string }[];
	};

	let { items }: Props = $props();
</script>

<dl class="mt-10 grid gap-2">
	{#each items as { title, description, color }}
		<div class="flex h-10 items-center gap-3 border-b last:border-b-0">
			<span aria-hidden="true" class="size-4 rounded-full bg-{color} shadow-border-inset"></span>
			<dt class="w-[120px] text-sm font-medium text-gray-1000">{title}</dt>
			<dd class="text-sm text-gray-900">{description}</dd>
		</div>
	{/each}
</dl>
