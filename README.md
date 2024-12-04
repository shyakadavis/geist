# Geist

This is a [Svelte](https://svelte.dev/) implementation of the [Geist](https://vercel.com/geist/introduction) Design System by [Vercel](https://vercel.com/).

## Notes

- Work in progress.
- Not affiliated with Vercel.
- Not a component library.
- Will try and keep the API's as close to the original as possible.
- Built with [shadcn-svelte](https://www.shadcn-svelte.com/)

## Add components with jsrepo

We have setup [jsrepo](https://github.com/ieedan/jsrepo) so that you can install our components just like `shadcn/ui`.

**Setup jsrepo**:

```bash
npx jsrepo init --project --repos github/shyakadavis/geist
```

**Add components**:

```bash
# list components
npx jsrepo add

# add specific component
npx jsrepo add ui/avatar
```

## Contributing

If you would like to contribute, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.
