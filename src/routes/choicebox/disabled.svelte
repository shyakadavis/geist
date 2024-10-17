<script lang="ts">
	import * as ChoiceboxGroup from '$lib/components/ui/choicebox';
</script>

<div class="grid gap-6">
	<ChoiceboxGroup.Root
		direction="row"
		disabled
		label="Choicebox group disabled"
		type="radio"
		value=""
	>
		<ChoiceboxGroup.Radio description="Free for two weeks" title="Pro Trial" value="trial_2" />
		<ChoiceboxGroup.Radio description="Get started now" title="Pro" value="pro_2" />
	</ChoiceboxGroup.Root>

	<ChoiceboxGroup.Root direction="row" label="Single input disabled" type="checkbox">
		<ChoiceboxGroup.Checkbox
			description="Free for two weeks"
			disabled
			title="Pro Trial"
			value="trial_2"
		/>
		<ChoiceboxGroup.Checkbox description="Get started now" title="Pro" value="pro_2" />
	</ChoiceboxGroup.Root>
</div>
