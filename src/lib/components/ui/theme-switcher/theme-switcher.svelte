<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { setMode, userPrefersMode } from 'mode-watcher';

	function handle_theme_change(event: Event) {
		const theme = (event.target as HTMLInputElement).value as 'system' | 'light' | 'dark';
		setMode(theme);
	}

	let options = $state([
		{ value: 'system', icon: Icons.ThemeSwitchSystem },
		{ value: 'light', icon: Icons.ThemeSwitchLight },
		{ value: 'dark', icon: Icons.ThemeSwitchDark }
	]);
</script>

<fieldset class="flex h-8 w-fit items-center rounded-full shadow-shadow-border">
	<legend class="sr-only">Select a display theme:</legend>
	{#each options as { value, icon }}
		{@render theme_option({ value, icon })}
	{/each}
</fieldset>

{#snippet theme_option({ value, icon: Icon }: { value: string; icon: typeof Icons.Accessibility })}
	<span class="relative">
		<input
			id="theme-switch-{value}"
			type="radio"
			{value}
			bind:group={$userPrefersMode}
			onchange={handle_theme_change}
			class="peer absolute size-full appearance-none rounded-full outline-none focus-visible:shadow-focus-ring"
		/>
		<label
			aria-label="system theme"
			for="theme-switch-{value}"
			title="{value} theme"
			class="relative flex size-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-700 hover:text-gray-1000 peer-checked:bg-background-100 peer-checked:text-gray-1000 peer-checked:shadow-shadow-border"
		>
			<Icon aria-hidden="true" height="16" width="16" />
		</label>
	</span>
{/snippet}
