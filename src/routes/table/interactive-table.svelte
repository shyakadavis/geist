<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Col 1</Table.Head>
			<Table.Head>Col 2</Table.Head>
			<Table.Head>Col 3</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body interactive>
		<Table.Row>
			<Table.Cell>Value 1.1</Table.Cell>
			<Table.Cell>Value 1.2</Table.Cell>
			<Table.Cell>Value 1.3</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell>Value 2.1</Table.Cell>
			<Table.Cell>Value 2.2</Table.Cell>
			<Table.Cell>Value 2.3</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell>Value 3.1</Table.Cell>
			<Table.Cell>Value 3.2</Table.Cell>
			<Table.Cell>Value 3.3</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
