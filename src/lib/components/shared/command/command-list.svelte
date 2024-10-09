<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { aside_items } from '$lib/config/sitemap';
	import { command_open_state } from '$lib/stores';
	import { cn } from '$lib/utils';
	import { Command } from 'bits-ui';

	type Props = Command.ListProps & {
		class?: string;
	};

	let { class: class_name = undefined, ...rest }: Props = $props();
</script>

<Command.List
	class={cn('overflow-y-auto overflow-x-hidden border-t px-2 pb-2', class_name)}
	{...rest}
>
	<Command.Viewport>
		<Command.Empty class="flex w-full items-center justify-center pb-6 pt-8 text-sm text-gray-700">
			No results found.
		</Command.Empty>
		{#each Object.entries(aside_items) as item}
			{@const [group, links] = item}
			<Command.Group>
				<Command.GroupHeading class="px-3 pb-2 pt-4 text-xs font-medium capitalize text-gray-700">
					{group}
				</Command.GroupHeading>
				<Command.GroupItems>
					{#each links as link}
						{@const disabled = link.status == 'soon'}
						<Command.Item
							onSelect={command_open_state.toggle}
							{disabled}
							value={link.title}
							class={cn(
								'flex h-10 cursor-pointer select-none items-center gap-2 px-3 py-2.5 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-gray-alpha-100',
								// disabled
								'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
							)}
						>
							{#snippet child({ props })}
								<a href={disabled ? undefined : link.href} {...props}>
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
				</Command.GroupItems>
			</Command.Group>
		{/each}
	</Command.Viewport>
</Command.List>
