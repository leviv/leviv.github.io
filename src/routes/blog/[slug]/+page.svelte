<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	const Content = $derived(data.Content);

	const formatDate = (dateString) => {
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://utteranc.es/client.js';
		script.async = true;
		script.crossOrigin = 'anonymous';
		script.setAttribute('repo', 'leviv/leviv.github.io');
		script.setAttribute('issue-term', 'pathname');
		script.setAttribute('label', 'comment');
		script.setAttribute('theme', 'preferred-color-scheme');

		document.getElementById('comments-container').appendChild(script);
	});
</script>

<svelte:head>
	<title>{data.post.meta.title} | leviv.cool</title>
</svelte:head>

<article class="post">
	<header class="post-header">
		<h1 class="post-title">{data.post.meta.title}</h1>
		<p class="post-meta">
			<time datetime={data.post.meta.date}>
				{formatDate(data.post.meta.date)}
			</time>
			{#if data.post.meta.author}
				• <span>{data.post.meta.author}</span>
			{/if}
		</p>
	</header>

	<div class="post-content">
		<Content />
	</div>
</article>

<h2>Comments</h2>
<div id="comments-container"></div>

<style>
	.post-header {
		margin-bottom: 30px;
	}

	.post-title {
		font-size: 42px;
		letter-spacing: -1px;
		line-height: 1;
		margin-bottom: 0;

		@media screen and (max-width: 768px) {
			font-size: 36px;
		}
	}

	.post-meta {
		font-size: 14px;
		color: #828282;
		margin-top: 5px;

		@media (prefers-color-scheme: dark) {
			color: #9e9e9e;
		}
	}

	.post-content {
		margin-bottom: 30px;

		:global(h2) {
			font-size: 28px;
			margin-top: 30px;
			margin-bottom: 15px;
		}

		:global(h3) {
			font-size: 22px;
			margin-top: 25px;
			margin-bottom: 10px;
		}

		:global(p) {
			margin-bottom: 15px;
			line-height: 1.6;
		}

		:global(img) {
			max-width: 100%;
			height: auto;
		}

		:global(pre) {
			padding: 15px;
			overflow-x: auto;
			border-radius: 4px;
			background: #f5f5f5;

			@media (prefers-color-scheme: dark) {
				background: #1e1e1e;
			}
		}

		:global(code) {
			font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
			font-size: 14px;
		}
	}

	h2 {
		font-size: 28px;
		margin-top: 30px;
		margin-bottom: 15px;
	}
</style>
