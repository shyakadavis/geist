<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		maximumFractionDigits: 2,
		currency: 'usd'
	});

	function format_currency(amount: number): string {
		return formatter.format(amount);
	}

	const items = [
		{
			product: 'Brake Pads Set',
			usage: '100 sets',
			price: '$50 per set',
			charge: 5000
		},
		{
			product: 'Oil Filters',
			usage: '200 filters',
			price: '$10 per filter',
			charge: 2000
		},
		{
			product: 'Car Batteries',
			usage: '50 batteries',
			price: '$100 per battery',
			charge: 5000
		},
		{
			product: 'Headlight Bulbs',
			usage: '300 bulbs',
			price: '$15 per bulb',
			charge: 4500
		},
		{
			product: 'Windshield Wipers',
			usage: '250 pairs',
			price: '$20 per pair',
			charge: 5000
		},
		{
			product: 'Spark Plugs',
			usage: '500 sets',
			price: '$5 per set',
			charge: 2500
		}
	];
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[44%]">Product</Table.Head>
			<Table.Head class="w-[22%]">Usage</Table.Head>
			<Table.Head class="w-[22%]">Price</Table.Head>
			<Table.Head class="w-[11%]">Charge</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body interactive striped>
		{#each items as item, i (i)}
			<Table.Row>
				<Table.Cell>{item.product}</Table.Cell>
				<Table.Cell>{item.usage}</Table.Cell>
				<Table.Cell>{item.price}</Table.Cell>
				<Table.Cell>{format_currency(item.charge)}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
	<Table.Footer>
		<Table.Row>
			<Table.Cell>Subtotal</Table.Cell>
			<Table.Cell aria-hidden></Table.Cell>
			<Table.Cell aria-hidden></Table.Cell>
			<Table.Cell>
				{format_currency(items.reduce((sum, val) => sum + val.charge, 0))}
			</Table.Cell>
		</Table.Row>
	</Table.Footer>
</Table.Root>
