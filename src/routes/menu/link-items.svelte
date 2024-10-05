<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Menu from '$lib/components/ui/menu';

	let links = $state([
		{ href: 'https://github.com/ieedan', label: 'One' },
		{ href: 'https://github.com/ddtamn', label: 'Two' },
		{ href: 'https://github.com/metonym/', label: 'Three' }
	]);
</script>

<Menu.Root>
	<Menu.Trigger>
		{#snippet child({ props })}
			<Button {...props}>Actions</Button>
		{/snippet}
	</Menu.Trigger>
	<Menu.Content class="w-[200px]">
		<Menu.Group>
			{#each links as { href, label }}
				<Menu.Item>
					{#snippet child({ props })}
						<a {...props} {href} target="_blank" rel="noopener noreferrer">{label}</a>
					{/snippet}
				</Menu.Item>
			{/each}
		</Menu.Group>
	</Menu.Content>
</Menu.Root>
