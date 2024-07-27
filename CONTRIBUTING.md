# Contributing guidelines

Thank you for your interest in contributing! Any contribution is highly appreciated ✨

## Preparing a Pull Request

A good PR is small, focuses on a single feature or improvement, and clearly communicates the problem
it solves. Try not to include more than one issue in a single PR. It's much easier to review
multiple small pull requests than one that is large.

1. [Fork the repository](https://github.com/shyakadavis/geist/fork).

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/geist.git
cd geist
git remote add upstream https://github.com/shyakadavis/geist.git
```

3. Synchronize your local `main` branch with the upstream remote:

```sh
git checkout main
git pull upstream main
```

4. Install dependencies with [PNPM](https://pnpm.io/):

```sh
pnpm i
```

5. Create a new branch related to your PR:

```sh
git checkout -b fix/bug-being-fixed
```

6. Make changes, then commit and push to your forked repository:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/shyakadavis/geist) and
   [make a Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Notes

Coming from `shadcn-svelte`, theming is different here in order to keep the APIs as close to the original as possible.

For example, class names like `bg-accent`, `text-muted-foreground`, etc. produce no output. ([Tailwind CSS IntelliSense](https://github.com/tailwindlabs/tailwindcss-intellisense.git) will help you with catching these _ghost_ class names.)

As such, please refer to the `src/app.css` file for the actual styles that are being applied.
