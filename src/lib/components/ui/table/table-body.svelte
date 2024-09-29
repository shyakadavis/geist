<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement> & {
		striped?: boolean;
		interactive?: boolean;
	};

	
	interface Props { [key: string]: any }

	let {
		class: class_name = undefined,
		striped = false,
		interactive = false,
		children,
		...rest
	}: Props = $props();
</script>

<div aria-hidden="true" class="h-3"></div>
<tbody
	data-striped={striped}
	data-interactive={interactive}
	class={cn('group', class_name)}
	{...rest}
>
	{@render children?.()}
</tbody>
