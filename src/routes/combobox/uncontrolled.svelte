<script lang="ts">
	import { Combobox } from '$lib/components/ui/combobox';

	const options = [
		{ label: 'One', value: '1' },
		{ label: 'Two', value: '2' },
		{ label: 'Three', value: '3' }
	];
</script>

<Combobox placeholder="Search..." {options} />
