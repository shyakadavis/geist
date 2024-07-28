<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import AffixAndSuffix from './affix-and-suffix.svelte';
	import affix_and_suffix_code from './affix-and-suffix.svelte?raw';
	import CustomTrigger from './custom-trigger.svelte';
	import custom_trigger_code from './custom-trigger.svelte?raw';
	import Default from './default.svelte';
	import default_code from './default.svelte?raw';
	import DisabledItems from './disabled-items.svelte';
	import disabled_items_code from './disabled-items.svelte?raw';
	import LinkItems from './link-items.svelte';
	import link_items_code from './link-items.svelte?raw';
	import MenuPosition from './menu-position.svelte';
	import menu_position_code from './menu-position.svelte?raw';

	export let data;
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default" subtitle="Menu extends the [Button component](/button)." code={default_code}>
		<Default />
	</Demo>

	<Demo id="disabled-items" code={disabled_items_code}>
		<DisabledItems />
	</Demo>

	<Demo id="links" code={link_items_code}>
		<LinkItems />
	</Demo>

	<Demo
		id="custom-trigger"
		subtitle="The trigger is still wrapped by an unstyled button."
		code={custom_trigger_code}
	>
		<CustomTrigger />
	</Demo>

	<Demo
		id="affix-and-suffix"
		subtitle="The trigger is still wrapped by an unstyled button."
		code={affix_and_suffix_code}
	>
		<AffixAndSuffix />
	</Demo>

	<Demo
		id="menu-position"
		subtitle="The position will automatically adapt based on the window bounds."
		code={menu_position_code}
	>
		<MenuPosition />
	</Demo>
</PageWrapper>
