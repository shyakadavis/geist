<script lang="ts">
import { Icons } from "$lib/assets/icons";
import { cn } from "$lib/utils";
import { setMode, userPrefersMode } from "mode-watcher";

function handle_theme_change(event: Event) {
	const theme = (event.target as HTMLInputElement).value as
		| "system"
		| "light"
		| "dark";
	setMode(theme);
}
</script>

<fieldset
	class={cn('flex items-center h-8 rounded-full shadow-shadow-border w-fit border-y', {
		'border-l': $userPrefersMode !== 'system',
		'border-r': $userPrefersMode !== 'dark',
		'border-x': $userPrefersMode === 'light',
	})}
>
	<legend class="sr-only">Select a display theme:</legend>
	<span>
		<input
			id="theme-switch-system"
			type="radio"
			value="system"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="appearance-none absolute"
		/>
		<label
			aria-label="system theme"
			for="theme-switch-system"
			title="system theme"
			class={cn(
				'bg-transparent text-gray-700 hover:text-gray-1000 shadow-gray-400 flex items-center justify-center rounded-full size-8 cursor-pointer relative',
				{
					'border text-gray-1000 shadow-gray-400 bg-background-100': $userPrefersMode === 'system',
				},
			)}
		>
			<Icons.ThemeSwitchSystem aria-hidden="true" height="16" width="16" />
		</label>
	</span>
	<span class="h-full">
		<input
			id="theme-switch-light"
			type="radio"
			value="light"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="appearance-none absolute"
		/>
		<label
			aria-label="light theme"
			for="theme-switch-light"
			title="light theme"
			class={cn(
				'bg-transparent text-gray-700 hover:text-gray-1000 shadow-gray-400 flex items-center justify-center rounded-full size-8 cursor-pointer relative',
				{
					'border text-gray-1000 shadow-gray-400 bg-background-100': $userPrefersMode === 'light',
				},
			)}
		>
			<Icons.ThemeSwitchLight aria-hidden="true" height="16" width="16" />
		</label>
	</span>
	<span class="h-full">
		<input
			id="theme-switch-dark"
			type="radio"
			value="dark"
			bind:group={$userPrefersMode}
			on:change={handle_theme_change}
			class="appearance-none absolute"
		/>
		<label
			aria-label="dark theme"
			for="theme-switch-dark"
			title="dark theme"
			class={cn(
				'bg-transparent text-gray-700 hover:text-gray-1000 shadow-gray-400 flex items-center justify-center rounded-full size-8 cursor-pointer relative',
				{
					'border text-gray-1000 shadow-gray-400 bg-background-100': $userPrefersMode === 'dark',
				},
			)}
		>
			<Icons.ThemeSwitchDark aria-hidden="true" height="16" width="16" />
		</label>
	</span>
</fieldset>
