<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { Input } from '$lib/components/ui/input';
</script>

<div class="flex flex-col items-start gap-4">
	<Input aria-labelledby="Demo" placeholder="Default" affix={Icons.ArrowCircleUp} />
	<Input aria-labelledby="Demo" placeholder="Default" suffix={Icons.ArrowCircleUp} />
	<Input aria-labelledby="Demo" placeholder="Default" affix="https://" suffix=".com" />
	<Input
		aria-labelledby="Demo"
		placeholder="Default"
		affix={Icons.ArrowCircleUp}
		affix_styling={false}
		suffix={Icons.ArrowCircleUp}
		suffix_styling={false}
	/>
	<Input aria-labelledby="Demo" placeholder="Default" affix="vercel/" suffix_styling={false} />
</div>
