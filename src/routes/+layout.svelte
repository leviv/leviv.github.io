<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<Header />

{#if $page.url.pathname === '/'}
	{@render children()}
{:else}
	<main class="page-content" aria-label="Content">
		<div class="wrapper">
			{@render children()}
		</div>
	</main>

	<Footer />
{/if}

<style>
	main {
		padding-top: 80px !important;
	}

	.page-content {
		padding: 30px 0;
		flex: 1 0 auto;
	}

	.wrapper {
		max-width: calc(800px - (30px * 2));
		margin-right: auto;
		margin-left: auto;
		padding-right: 30px;
		padding-left: 30px;
	}
</style>
