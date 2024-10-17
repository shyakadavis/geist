<script lang="ts">
	import { cn } from '$lib/utils';
	import { Command } from 'bits-ui';

	type Props = Command.InputProps & {
		class?: string;
	};

	let { class: class_name = undefined, ...rest }: Props = $props();
</script>

<Command.Input
	placeholder="Search..."
	class={cn(
		'inline-flex w-full truncate rounded-[inherit] bg-transparent px-4 text-lg transition-colors placeholder:text-gray-700 focus:outline-none focus:ring-0',
		class_name
	)}
	{...rest}
/>
