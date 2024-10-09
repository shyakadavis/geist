<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import BlankSlate from './blank-slate.svelte';
	import blank_slate_code from './blank-slate.svelte?raw';
	import EmptyStateDesignFramework from './empty-state-design-framework.svelte';
	import empty_state_design_framework_code from './empty-state-design-framework.svelte?raw';
	import Informational from './informational.svelte';
	import informational_code from './informational.svelte?raw';

	let { data } = $props();

	const empty_state_design_framework_subtitle =
		'When designed thoughtfully, empty states become an essential part of a smooth user experience, providing enough context to keep users working in a productive way. There are several approaches to explore that will match the needs a developer in different situations:\n- __Blank Slate__ - Basic empty state for first run experience\n- __Informational__ - Alternative for first use empty state, including in-line CTAs and supplemental documentation links\n- __Educational__ - Launch a contextual onboarding flow to gain deeper understanding about that area of the app\n- __Guide__ - Starter content that allows users to interact with data and learn the system by tinkering or setting up their environment';

	const informational_subtitle =
		'Help users by clearly explaining the benefit and utility of a product or feature, with a call to action and link to more information to help users progress.\n\nDefault to showing rather than telling the value of a feature. Certain entry points to a product may call for a unique empty state and a call to upgrade. Informational empty states will include a call to action.';
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo
		id="empty-state-design-framework"
		subtitle={empty_state_design_framework_subtitle}
		code={empty_state_design_framework_code}
	>
		{#snippet image()}
			<Icons.ErrorStates aria-hidden="true" />
		{/snippet}
		<EmptyStateDesignFramework />
	</Demo>

	<Demo
		id="blank-slate"
		subtitle="The most basic empty state should convey the state of the view."
		code={blank_slate_code}
	>
		<BlankSlate />
	</Demo>

	<Demo id="informational" subtitle={informational_subtitle} code={informational_code}>
		<Informational />
	</Demo>
</PageWrapper>
