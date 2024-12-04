<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDListElement> & {
		tooltip: string;
		content: string;
	};

	let {
		title,
		tooltip,
		content,
		class: class_name = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<dl class={cn('grid gap-2', class_name)} {...rest}>
	<dt
		class="inline-flex min-h-[14px] items-center gap-0.5 whitespace-nowrap text-sm capitalize leading-[14px] text-gray-900"
	>
		{title}
		<Tooltip.Provider delayDuration={150}>
			<Tooltip.Root>
				<Tooltip.Trigger class="cursor-auto">
					<Icons.InformationFillSmall />
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{tooltip}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</dt>
	<dd class="text-sm font-medium leading-4 text-gray-1000">{content}</dd>
</dl>
