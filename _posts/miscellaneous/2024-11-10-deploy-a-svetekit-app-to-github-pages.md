---
layout: post
title: "Deploy a SveteKit app to GitHub Pagees"
image:
category: miscellaneous
tag: miscellaneous
---

This is mainly a summary of this [Svelte Doc](https://svelte.dev/docs/kit/adapter-static) with some fluff cut out.

## Add a static adapter. This will prerender your entire site as a collection of static files.

Add the [package](https://svelte.dev/docs/kit/adapter-static) to the project:

```bash
pnpm add -D @sveltejs/adapter-static
# Using npm: npm i -D @sveltejs/adapter-static
```

Add the adapter to your `svelte.config.js`

```javascript
import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      // Make config.kit.paths.base to match the current repo name
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};
```

Add to `src/routes/+layout.ts` (or `.js`). Create the file if it doesn't yet exist. Add the following line. It's ok if there's nothing else in the file.

```javascript
export const prerender = true;
```

## Add a GitHhub Action

Create `.github/workflows/deploy.yml`

Add the following code. This will build and deploy the project every time you push to the main branch

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build_site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # If you're using pnpm, add this step then change the commands and cache key below to use `pnpm`
      # - name: Install pnpm
      #   uses: pnpm/action-setup@v3
      #   with:
      #     version: 8

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        env:
          BASE_PATH: "/${{ github.event.repository.name }}"
        run: npm run build

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          # This should match the `pages` option in your adapter-static options
          path: "build/"

  deploy:
    needs: build_site
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

## Add an empty `.nojekyll` file in your `static` directory to prevent Jekyll from interfering.

## Change the GitHub Repository settings

Go to the repository page > Settings > Pages. The url should be `https://github.com/{username}/{repo_name}}/settings/pages`. Under 'Build and deployment' select 'GitHub Actions. as the source.

It should look like this:

![Github Pages deploy page](/assets/img/2024-11-10-deploy-a-svetekit-app-to-github-pages/deploy.png)

## That's it! Simply push to main to deploy the site
