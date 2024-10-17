<script lang="ts">
	import { Combobox } from '$lib/components/ui/combobox';

	const items = [
		{
			label:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			value: 'one'
		},
		{
			label:
				'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			value: 'two'
		},
		{
			label:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			value: 'three'
		}
	];
</script>

<Combobox type="single" placeholder="Search..." {items} list_class="max-w-[500px]" />
