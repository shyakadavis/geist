<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import { setMode, userPrefersMode } from 'mode-watcher';

	function handle_theme_change(event: Event) {
		const theme = (event.target as HTMLInputElement).value as 'system' | 'light' | 'dark';
		setMode(theme);
	}
</script>

<fieldset class="flex h-8 w-fit items-center rounded-full shadow-shadow-border">
	<legend class="sr-only">Select a display theme:</legend>
	<!-- TODO: If/when you do upgrade to Svelte 5, this entire span can abstracted into a `snippet`. No boilerplate. -->
	<span class="relative">
		<input
			id="theme-switch-system"
			type="radio"
			value="system"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="peer absolute size-full appearance-none rounded-full outline-none focus-visible:shadow-focus-ring"
		/>
		<label
			aria-label="system theme"
			for="theme-switch-system"
			title="system theme"
			class="relative flex size-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-700 hover:text-gray-1000 peer-checked:bg-background-100 peer-checked:text-gray-1000 peer-checked:shadow-shadow-border"
		>
			<Icons.ThemeSwitchSystem aria-hidden="true" height="16" width="16" />
		</label>
	</span>
	<span class="relative">
		<input
			id="theme-switch-light"
			type="radio"
			value="light"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="peer absolute size-full appearance-none rounded-full outline-none focus-visible:shadow-focus-ring"
		/>
		<label
			aria-label="light theme"
			for="theme-switch-light"
			title="light theme"
			class="relative flex size-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-700 hover:text-gray-1000 peer-checked:bg-background-100 peer-checked:text-gray-1000 peer-checked:shadow-shadow-border"
		>
			<Icons.ThemeSwitchLight aria-hidden="true" height="16" width="16" />
		</label>
	</span>
	<span class="relative">
		<input
			id="theme-switch-dark"
			type="radio"
			value="dark"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="peer absolute size-full appearance-none rounded-full outline-none focus-visible:shadow-focus-ring"
		/>
		<label
			aria-label="dark theme"
			for="theme-switch-dark"
			title="dark theme"
			class="relative flex size-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-gray-700 hover:text-gray-1000 peer-checked:bg-background-100 peer-checked:text-gray-1000 peer-checked:shadow-shadow-border"
		>
			<Icons.ThemeSwitchDark aria-hidden="true" height="16" width="16" />
		</label>
	</span>
</fieldset>
