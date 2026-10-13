import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') || filename.includes('scooter') ? undefined : true
			},
			adapter: adapter(),
			prerender: {
				handleMissingId: 'warn',
				handleHttpError: 'warn'
			},
			preprocess: [
				mdsvex({ extensions: ['.svx', '.md'] }),
				{
					markup: ({ content }) => {
						return { code: content.replace('<script context="module">', '<script module>') };
					}
				}
			],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});
