<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.SeparatorProps;

	let { class: class_name = undefined, ...rest }: Props = $props();
</script>

<CommandPrimitive.Separator class={cn('-mx-1 h-px bg-gray-400', class_name)} {...rest} />
