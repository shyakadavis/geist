<script lang="ts">
	import * as ChoiceboxGroup from '$lib/components/ui/choicebox';
</script>

<ChoiceboxGroup.Root value="trial" direction="row" type="radio">
	<ChoiceboxGroup.Radio description="Free for two weeks" title="Pro Trial" value="trial" />
	<ChoiceboxGroup.Radio description="Get started now" title="Pro" value="pro" />
</ChoiceboxGroup.Root>
