<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	const tabs = [
		{ title: 'Apple', value: 'apple' },
		{ title: 'Banana', value: 'banana' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Strawberry', value: 'strawberry' },
		{ title: 'Mango', value: 'mango' },
		{ title: 'Pineapple', value: 'pineapple' },
		{ title: 'Grape', value: 'grape' },
		{ title: 'Watermelon', value: 'watermelon' },
		{ title: 'Peach', value: 'peach' },
		{ title: 'Kiwi', value: 'kiwi' },
		{ title: 'Cherry', value: 'cherry' },
		{ title: 'Blueberry', value: 'blueberry' },
		{ title: 'Pear', value: 'pear' },
		{ title: 'Plum', value: 'plum' },
		{ title: 'Raspberry', value: 'raspberry' }
	];
</script>

<Tabs.Root value="apple">
	<Tabs.List>
		{#each tabs as { title, value }}
			<Tabs.Trigger {value}>{title}</Tabs.Trigger>
		{/each}
	</Tabs.List>
</Tabs.Root>
