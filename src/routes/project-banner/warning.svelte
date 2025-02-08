<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import ProjectBanner from '$lib/components/ui/project-banner/project-banner.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<ProjectBanner
	icon={Icons.Stop}
	variant="warning"
	call_to_action={{
		label: 'Undo Rollback',
		onclick: () => {
			alert('Button clicked');
		}
	}}
>
	{#snippet label()}
		This project was rolled back by
		<Tooltip.Provider delayDuration={300}>
			<Tooltip.Root>
				<Tooltip.Trigger class="underline decoration-dashed underline-offset-[5px]">
					@johnphamous
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Yesterday for project marketing-website</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	{/snippet}
</ProjectBanner>
