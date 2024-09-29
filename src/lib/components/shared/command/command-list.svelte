<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import * as Command from '$lib/components/ui/command';
	import { aside_items } from '$lib/config/sitemap';
	import { cn } from '$lib/utils';

	type Props = {
		search: string;
		class?: string;
	};

	let { search, class: class_name = undefined, ...rest }: Props = $props();
</script>

<Command.List class={cn('px-1 pb-1', class_name)} {...rest}>
	<Command.Empty class="text-gray-600">
		No results found for
		<span class="font-semibold text-gray-1000">
			"{search}"
		</span>.
	</Command.Empty>
	{#each Object.entries(aside_items) as item}
		{@const [group, links] = item}
		<Command.Group
			class="[&_[data-cmdk-group-heading]]:py-3 [&_[data-cmdk-group-heading]]:capitalize [&_[data-cmdk-group-heading]]:text-gray-700"
		>
			<Command.GroupHeading>
				{group}
			</Command.GroupHeading>
			{#each links as link}
				{@const disabled = link.status == 'soon'}
				<Command.Item
					value={link.title}
					{disabled}
					class="flex place-items-center gap-3 rounded-md py-3 hover:cursor-pointer hover:bg-gray-100 aria-selected:bg-gray-100"
				>
					{#snippet child({ props })}
						<a href={link.href} {...props}>
							{#if link.icon}
								{@const Icon = link.icon}
								<span class="text-gray-1000">
									<Icon aria-hidden="true" width="16" height="16" />
								</span>
							{:else}
								<span class="text-gray-1000">
									<Icons.ArrowRight
										width="16"
										height="16"
										class="text-gray-600"
										aria-hidden="true"
									/>
								</span>
							{/if}
							<span>{link.title}</span>
							{#if link.status === 'new'}
								<Badge variant="blue" size="sm">New</Badge>
							{/if}
							{#if link.status === 'soon'}
								<Badge variant="gray-subtle" size="sm">Soon</Badge>
							{/if}
							{#if link.status === 'draft'}
								<Badge variant="purple-subtle" size="sm">Draft</Badge>
							{/if}
						</a>
					{/snippet}
				</Command.Item>
			{/each}
		</Command.Group>
	{/each}
</Command.List>
