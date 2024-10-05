<script lang="ts">
	import * as ChoiceboxGroup from '$lib/components/ui/choicebox';
</script>

<ChoiceboxGroup.Root direction="row" type="checkbox">
	<ChoiceboxGroup.Checkbox description="Free for two weeks" title="Pro Trial" value="trial" />
	<ChoiceboxGroup.Checkbox description="Get started now" title="Pro" value="pro" />
</ChoiceboxGroup.Root>
