<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import Demo from '$lib/components/shared/demo.svelte';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import { Badge } from '$lib/components/ui/badge';
</script>

<PageWrapper
	title="Badge"
	description="A label that emphasizes an element that requires attention, or helps categorize with other similar elements."
>
	<Demo id="variants" class="space-y-2">
		<div>
			<Badge variant="gray">gray</Badge>
			<Badge variant="gray-subtle">gray-subtle</Badge>
		</div>
		<div>
			<Badge variant="blue">blue</Badge>
			<Badge variant="blue-subtle">blue-subtle</Badge>
		</div>
		<div>
			<Badge variant="purple">purple</Badge>
			<Badge variant="purple-subtle">purple-subtle</Badge>
		</div>
		<div>
			<Badge variant="amber">amber</Badge>
			<Badge variant="amber-subtle">amber-subtle</Badge>
		</div>
		<div>
			<Badge variant="red">red</Badge>
			<Badge variant="red-subtle">red-subtle</Badge>
		</div>
		<div>
			<Badge variant="pink">pink</Badge>
			<Badge variant="pink-subtle">pink-subtle</Badge>
		</div>
		<div>
			<Badge variant="green">green</Badge>
			<Badge variant="green-subtle">green-subtle</Badge>
		</div>
		<div>
			<Badge variant="teal">teal</Badge>
			<Badge variant="teal-subtle">teal-subtle</Badge>
		</div>
		<div>
			<Badge variant="inverted">inverted</Badge>
		</div>
		<div>
			<Badge variant="trial">trial</Badge>
		</div>
		<div>
			<Badge variant="turbo">turborepo</Badge>
		</div>
	</Demo>

	<Demo id="sizes" class="space-y-2">
		<div>
			<Badge variant="gray" size="sm">small</Badge>
		</div>
		<div>
			<Badge variant="gray">medium</Badge>
		</div>
		<div>
			<Badge variant="gray" size="lg">large</Badge>
		</div>
	</Demo>

	<Demo id="with-icons" class="space-y-2">
		<div>
			<Badge variant="gray" size="lg" icon={Icons.Shield}>gray</Badge>
			<Badge variant="gray" size="md" icon={Icons.Shield}>gray</Badge>
			<Badge variant="gray" size="sm" icon={Icons.Shield}>gray</Badge>
			<Badge variant="gray-subtle" size="sm" icon={Icons.Shield}>gray</Badge>
			<Badge variant="gray-subtle" size="md" icon={Icons.Shield}>gray</Badge>
			<Badge variant="gray-subtle" size="lg" icon={Icons.Shield}>gray</Badge>
		</div>
		<div>
			<Badge variant="blue" size="lg" icon={Icons.Shield}>blue</Badge>
			<Badge variant="blue" size="md" icon={Icons.Shield}>blue</Badge>
			<Badge variant="blue" size="sm" icon={Icons.Shield}>blue</Badge>
			<Badge variant="blue-subtle" size="sm" icon={Icons.Shield}>blue</Badge>
			<Badge variant="blue-subtle" size="md" icon={Icons.Shield}>blue</Badge>
			<Badge variant="blue-subtle" size="lg" icon={Icons.Shield}>blue</Badge>
		</div>
		<div>
			<Badge variant="purple" size="lg" icon={Icons.Shield}>purple</Badge>
			<Badge variant="purple" size="md" icon={Icons.Shield}>purple</Badge>
			<Badge variant="purple" size="sm" icon={Icons.Shield}>purple</Badge>
			<Badge variant="purple-subtle" size="sm" icon={Icons.Shield}>purple</Badge>
			<Badge variant="purple-subtle" size="md" icon={Icons.Shield}>purple</Badge>
			<Badge variant="purple-subtle" size="lg" icon={Icons.Shield}>purple</Badge>
		</div>
		<div>
			<Badge variant="amber" size="lg" icon={Icons.Shield}>amber</Badge>
			<Badge variant="amber" size="md" icon={Icons.Shield}>amber</Badge>
			<Badge variant="amber" size="sm" icon={Icons.Shield}>amber</Badge>
			<Badge variant="amber-subtle" size="sm" icon={Icons.Shield}>amber</Badge>
			<Badge variant="amber-subtle" size="md" icon={Icons.Shield}>amber</Badge>
			<Badge variant="amber-subtle" size="lg" icon={Icons.Shield}>amber</Badge>
		</div>
		<div>
			<Badge variant="red" size="lg" icon={Icons.Shield}>red</Badge>
			<Badge variant="red" size="md" icon={Icons.Shield}>red</Badge>
			<Badge variant="red" size="sm" icon={Icons.Shield}>red</Badge>
			<Badge variant="red-subtle" size="sm" icon={Icons.Shield}>red</Badge>
			<Badge variant="red-subtle" size="md" icon={Icons.Shield}>red</Badge>
			<Badge variant="red-subtle" size="lg" icon={Icons.Shield}>red</Badge>
		</div>
		<div>
			<Badge variant="pink" size="lg" icon={Icons.Shield}>pink</Badge>
			<Badge variant="pink" size="md" icon={Icons.Shield}>pink</Badge>
			<Badge variant="pink" size="sm" icon={Icons.Shield}>pink</Badge>
			<Badge variant="pink-subtle" size="sm" icon={Icons.Shield}>pink</Badge>
			<Badge variant="pink-subtle" size="md" icon={Icons.Shield}>pink</Badge>
			<Badge variant="pink-subtle" size="lg" icon={Icons.Shield}>pink</Badge>
		</div>
		<div>
			<Badge variant="green" size="lg" icon={Icons.Shield}>green</Badge>
			<Badge variant="green" size="md" icon={Icons.Shield}>green</Badge>
			<Badge variant="green" size="sm" icon={Icons.Shield}>green</Badge>
			<Badge variant="green-subtle" size="sm" icon={Icons.Shield}>green</Badge>
			<Badge variant="green-subtle" size="md" icon={Icons.Shield}>green</Badge>
			<Badge variant="green-subtle" size="lg" icon={Icons.Shield}>green</Badge>
		</div>
		<div>
			<Badge variant="teal" size="lg" icon={Icons.Shield}>teal</Badge>
			<Badge variant="teal" size="md" icon={Icons.Shield}>teal</Badge>
			<Badge variant="teal" size="sm" icon={Icons.Shield}>teal</Badge>
			<Badge variant="teal-subtle" size="sm" icon={Icons.Shield}>teal</Badge>
			<Badge variant="teal-subtle" size="md" icon={Icons.Shield}>teal</Badge>
			<Badge variant="teal-subtle" size="lg" icon={Icons.Shield}>teal</Badge>
		</div>
		<div>
			<Badge variant="inverted" size="lg" icon={Icons.Shield}>inverted</Badge>
			<Badge variant="inverted" size="md" icon={Icons.Shield}>inverted</Badge>
			<Badge variant="inverted" size="sm" icon={Icons.Shield}>inverted</Badge>
		</div>
	</Demo>
</PageWrapper>
