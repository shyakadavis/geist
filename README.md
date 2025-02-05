# Geist

This is a [Svelte](https://svelte.dev/) implementation of the [Geist](https://vercel.com/geist/introduction) Design System by [Vercel](https://vercel.com/).

<details>
<summary>Notes</b></summary>

- Work in progress.
- Not affiliated with Vercel.
- Not a component library.
- Will try and keep the API's as close to the original as possible.
- Built with [shadcn-svelte](https://www.shadcn-svelte.com/)

</details>

<details>
<summary>Setup</b></summary>

### 1. **Initialize SvelteKit**:

```bash
pnpm dlx sv create
# add tailwind, prettier, eslint
```

### 2. **Copy Config Files**:

Copy [app.css](https://github.com/shyakadavis/geist/blob/main/src/app.css) to `src/app.css`

Copy [tailwind.config.ts](https://github.com/shyakadavis/geist/blob/main/tailwind.config.ts) to `tailwind.config.ts`

Install tailwind plugins:

```bash
pnpm add -D @pyncz/tailwind-mask-image @tailwindcss/typography tailwindcss-animate
```

### 3. Setup SVG plugin:

Install plugin:

```bash
pnpm add -D @poppanator/sveltekit-svg
```

Add plugin in `vite.config.ts`:

```diff
+import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
+		svg()
	]
});
```

> 💡 Tip

> For Typescript support of `file.svg?component`, add this import to any `.d.ts` file in your project path:

```diff
+ import '@poppanator/sveltekit-svg/dist/svg';
```

### 4. Install fonts

```bash
pnpm add -D @fontsource/geist-sans @fontsource/geist-mono
```

### 5. Setup Theming

```bash
pnpm add -D mode-watcher
```

Add `<ModeWatcher/>` to `src/routes/+layout.svelte`

```diff
<script lang="ts">
+	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

+<ModeWatcher/>
{@render children()}
```

</details>

<details>
<summary>Add components with jsrepo</b></summary>

We have set up [jsrepo](https://github.com/ieedan/jsrepo) so that you can install our components just like `shadcn/ui`.

**Setup jsrepo**:

```bash
pnpm dlx jsrepo init --project --repos github/shyakadavis/geist
```

Configure paths in `jsrepo.json`:

```diff
{
	"$schema": "https://unpkg.com/jsrepo@1.31.0/schemas/project-config.json",
	"repos": ["github/shyakadavis/geist"],
	"includeTests": false,
	"watermark": true,
	"formatter": "prettier",
	"paths": {
		"*": "./src/lib/ts/blocks",
+       "ui": "$lib/components/ui",
+       "icons": "$lib/assets/icons",
+       "lib": "$lib/"
	}
}
```

**Add components**:

```bash
# list components
pnpm dlx jsrepo add

# add specific component
pnpm dlx jsrepo add ui/avatar
```

</details>

<details>
<summary>Contributing</b></summary>

If you would like to contribute, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

</details>
