<script lang="ts">
import { Icons } from "$lib/assets/icons";
import { setMode, userPrefersMode } from "mode-watcher";

function handle_theme_change(event: Event) {
	const theme = (event.target as HTMLInputElement).value as
		| "system"
		| "light"
		| "dark";
	setMode(theme);
}
</script>

<fieldset class="flex items-center h-8 rounded-full shadow-shadow-border w-fit border-y">
	<legend class="sr-only">Select a display theme:</legend>
	<!-- TODO: If/when you do upgrade to Svelte 5, this entire span can abstracted into a `snippet`. No boilerplate. -->
	<span class="relative">
		<input
			id="theme-switch-system"
			type="radio"
			value="system"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="appearance-none absolute outline-none peer focus-visible:shadow-focus-ring size-full rounded-full"
		/>
		<label
			aria-label="system theme"
			for="theme-switch-system"
			title="system theme"
			class="bg-transparent text-gray-700 hover:text-gray-1000 flex items-center justify-center rounded-full size-8 cursor-pointer relative peer-checked:text-gray-1000 peer-checked:border-x peer-checked:bg-background-100 peer-checked:[box-shadow:0_0_0_1px_var(--gray-400)]"
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
			class="appearance-none absolute outline-none peer focus-visible:shadow-focus-ring size-full rounded-full"
		/>
		<label
			aria-label="light theme"
			for="theme-switch-light"
			title="light theme"
			class="bg-transparent text-gray-700 hover:text-gray-1000 flex items-center justify-center rounded-full size-8 cursor-pointer relative peer-checked:text-gray-1000 peer-checked:border-x peer-checked:bg-background-100 peer-checked:[box-shadow:0_0_0_1px_var(--gray-400)]"
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
			class="appearance-none absolute outline-none peer focus-visible:shadow-focus-ring size-full rounded-full"
		/>
		<label
			aria-label="dark theme"
			for="theme-switch-dark"
			title="dark theme"
			class="bg-transparent text-gray-700 hover:text-gray-1000 flex items-center justify-center rounded-full size-8 cursor-pointer relative peer-checked:text-gray-1000 peer-checked:border-x peer-checked:bg-background-100 peer-checked:[box-shadow:0_0_0_1px_var(--gray-400)]"
		>
			<Icons.ThemeSwitchDark aria-hidden="true" height="16" width="16" />
		</label>
	</span>
</fieldset>
