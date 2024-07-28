<script lang="ts">
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	type $$Props = MenuPrimitive.RadioGroupProps;

	export let value: $$Props['value'] = undefined;
</script>

<MenuPrimitive.RadioGroup {...$$restProps} bind:value>
	<slot />
</MenuPrimitive.RadioGroup>
