<script lang="ts">
	import { Icons } from '$lib/assets/icons';

	import { Input } from '$lib/components/ui/input';
</script>

<div class="grid w-fit gap-4">
	<Input aria-labelledby="Demo" placeholder="Default" prefix={Icons.ArrowCircleUp} />
	<Input aria-labelledby="Demo" placeholder="Default" suffix={Icons.ArrowCircleUp} />
	<Input aria-labelledby="Demo" placeholder="Default" prefix="https://" suffix=".com" />
	<Input
		aria-labelledby="Demo"
		placeholder="Default"
		prefix={Icons.ArrowCircleUp}
		prefix_styling={false}
		suffix={Icons.ArrowCircleUp}
		suffix_styling={false}
	/>
	<Input aria-labelledby="Demo" placeholder="Default" prefix="vercel/" suffix_styling={false} />
</div>
