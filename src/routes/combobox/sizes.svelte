<script lang="ts">
	import { Combobox } from '$lib/components/ui/combobox';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];
</script>

<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
	<Combobox type="single" placeholder="Search..." {items} size="sm" />
	<Combobox type="single" placeholder="Search..." {items} />
	<Combobox type="single" placeholder="Search..." {items} size="lg" />
</div>
