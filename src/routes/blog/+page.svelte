<script>
	let { data } = $props();

	let standardPosts = $derived(data.posts.filter(
		(p) =>
			!p.meta.categories.includes('leetcode') &&
			!p.meta.categories.includes('archive') &&
			!p.meta.categories.includes('projects') &&
			!p.meta.tags.includes('archive')
	));
	let archivePosts = $derived(data.posts.filter(
		(p) => p.meta.categories.includes('leetcode') || p.meta.categories.includes('archive') || p.meta.tags.includes('archive')
	));

	const formatDate = (dateString) => {
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};
</script>

<svelte:head>
	<title>Blog | leviv.cool</title>
</svelte:head>

<div class="home">
	<a href="https://forms.gle/aDZnNEM8pXLVUhkY8" target="_blank" class="subscribe-link">Subscribe to my email list</a>

	<h2 class="post-list-heading">Posts</h2>

	<p>
		A place to express my thoughts in more than 280 characters. Sometimes technical, sometimes
		personal, always containing grammatical errors.
	</p>

	<ul class="post-list">
		{#each standardPosts as post}
			<li>
				<span class="post-meta">{formatDate(post.meta.date)}</span>
				<h3>
					<a class="post-link" href={post.path}>
						{post.meta.title}
					</a>
				</h3>
				{#if post.meta.excerpt}
					{post.meta.excerpt}
				{/if}
			</li>
		{/each}
	</ul>

	<h2 class="post-list-heading">Archived posts</h2>

	<p>
		Right now just personal Leetcode solutions that I do not want showing up at the top of my blog.
		I often get asked, "Levi, why do you post so many Leetcode solutions?" to which I respond
		¯\_(ツ)_/¯. I realize there's much better solutions out there for these problems, but these are <i
			>my</i
		> solutions, which makes them special to me.
	</p>

	<ul class="post-list">
		{#each archivePosts as post}
			<li>
				<span class="post-meta">{formatDate(post.meta.date)}</span>
				<h3>
					<a class="post-link" href={post.path}>
						{post.meta.title}
					</a>
				</h3>
				{#if post.meta.excerpt}
					{post.meta.excerpt}
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.subscribe-link {
		display: inline-block;
		margin-bottom: 10px;
		font-weight: bold;
	}

	.post-list-heading {
		font-size: 28px;
		margin-top: 30px;
	}

	.post-list {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			margin-bottom: 30px;
		}
	}

	.post-meta {
		font-size: 14px;
		color: #828282;
		display: block;

		@media (prefers-color-scheme: dark) {
			color: #9e9e9e;
		}
	}

	.post-link {
		display: block;
		font-size: 24px;
		line-height: 1.2;
		text-decoration: none;
		margin-top: 5px;
		margin-bottom: 5px;
	}
</style>
