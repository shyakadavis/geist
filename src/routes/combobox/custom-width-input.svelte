<script lang="ts">
	import { Combobox } from '$lib/components/ui/combobox';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];
</script>

<Combobox placeholder="Search..." {items} class="w-[256px]" />
