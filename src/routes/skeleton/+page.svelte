<script lang="ts">
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import DefaultWithBoxHeight from './default-with-box-height.svelte';
	import default_with_box_height_code from './default-with-box-height.svelte?raw';
	import DefaultWithSetWidth from './default-with-set-width.svelte';
	import default_with_set_width_code from './default-with-set-width.svelte?raw';
	import NoAnimation from './no-animation.svelte';
	import no_animation_code from './no-animation.svelte?raw';
	import Pill from './pill.svelte';
	import pill_code from './pill.svelte?raw';
	import Rounded from './rounded.svelte';
	import rounded_code from './rounded.svelte?raw';
	import Squared from './squared.svelte';
	import squared_code from './squared.svelte?raw';
	import WrappingChildrenWithFixedSize from './wrapping-children-with-fixed-size.svelte';
	import wrapping_children_with_fixed_size_code from './wrapping-children-with-fixed-size.svelte?raw';
	import WrappingChildren from './wrapping-children.svelte';
	import wrapping_children_code from './wrapping-children.svelte?raw';

	let { data } = $props();
</script>

<PageWrapper title={data.title} description={data.description}>
	<Demo id="default-with-set-width" code={default_with_set_width_code}>
		<DefaultWithSetWidth />
	</Demo>

	<Demo id="default-with-box-height" code={default_with_box_height_code}>
		<DefaultWithBoxHeight />
	</Demo>

	<Demo
		id="wrapping-children"
		subtitle="If you do not pass a fixed size, it will be calculated automatically."
		code={wrapping_children_code}
	>
		<WrappingChildren />
	</Demo>

	<Demo
		id="wrapping-children-with-fixed-size"
		subtitle="The skeleton will hide when children are not null, but the size is retained."
		code={wrapping_children_with_fixed_size_code}
	>
		<WrappingChildrenWithFixedSize />
	</Demo>

	<Demo id="pill" code={pill_code}>
		<Pill />
	</Demo>

	<Demo id="rounded" code={rounded_code}>
		<Rounded />
	</Demo>

	<Demo id="squared" code={squared_code}>
		<Squared />
	</Demo>

	<Demo id="no-animation" code={no_animation_code}>
		<NoAnimation />
	</Demo>
</PageWrapper>
