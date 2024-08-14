<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLTableSectionElement> & {
		striped?: boolean;
		interactive?: boolean;
	};

	let class_name: $$Props['class'] = undefined;
	export { class_name as class };
	export let striped: $$Props['striped'] = false;
	export let interactive: $$Props['interactive'] = false;
</script>

<div aria-hidden="true" class="h-3"></div>
<tbody
	data-striped={striped}
	data-interactive={interactive}
	class={cn('group', class_name)}
	{...$$restProps}
>
	<slot />
</tbody>
