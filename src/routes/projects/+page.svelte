<script>
	let { data } = $props();

	let activeFilter = $state('all');

	let allProjects = $derived(
		data.posts.filter((p) => p.meta.categories && p.meta.categories.includes('projects'))
	);

	let filteredProjects = $derived(
		activeFilter === 'all'
			? allProjects
			: allProjects.filter((p) => (p.meta.tags || []).includes(activeFilter))
	);

	const formatDate = (dateString) => {
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};
</script>

<svelte:head>
	<title>Projects | leviv.cool</title>
</svelte:head>

<div class="home">
	<h2 class="post-list-heading">Projects</h2>

	<div class="filter-buttons">
		<button
			onclick={() => (activeFilter = 'all')}
			class:active={activeFilter === 'all'}
			class="filter-button">All</button
		>
		<button
			onclick={() => (activeFilter = 'grad-school')}
			class:active={activeFilter === 'grad-school'}
			class="filter-button">Graduate School</button
		>
		<button
			onclick={() => (activeFilter = 'personal')}
			class:active={activeFilter === 'personal'}
			class="filter-button">Personal</button
		>
		<button
			onclick={() => (activeFilter = 'college')}
			class:active={activeFilter === 'college'}
			class="filter-button">College</button
		>
		<button
			onclick={() => (activeFilter = 'high-school')}
			class:active={activeFilter === 'high-school'}
			class="filter-button">High School</button
		>
	</div>

	<ul class="post-list">
		{#each filteredProjects as post}
			<li class="post-item">
				<span class="post-meta">{formatDate(post.meta.date)}</span>
				<h3>
					<a class="post-link" href={post.path}>
						{post.meta.title}
					</a>
				</h3>

				{#if post.meta.image}
					<div class="post-image">
						<img src={post.meta.image} alt="{post.meta.title} feature image" />
					</div>
				{/if}

				{#if post.meta.excerpt}
					{post.meta.excerpt}
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.post-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 20px;
		padding: 0;
		list-style: none;

		li {
			flex: calc(50% - 20px);
			margin-bottom: 20px;

			h3 {
				min-height: 72px;
			}

			.post-image {
				position: relative;
				width: 100%;
				height: 260px;
				overflow: hidden;

				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			@media (max-width: 768px) {
				flex: 100%;
				padding: 0 0;
			}
		}
	}

	.filter-buttons {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	button {
		background: none;
		border: 3px solid var(--primaryColor);
		border-radius: 4px;
		color: var(--primaryColor);
		cursor: pointer;
		transition: all 0.2s;
		font-size: 18px;
		padding: 5px 10px;

		&.active {
			color: var(--primaryDarker);
			border-color: var(--primaryDarker);

			@media (prefers-color-scheme: dark) {
				color: var(--primaryDarker--dark);
				border-color: var(--primaryDarker--dark);
			}
		}

		@media (prefers-color-scheme: dark) {
			border-color: var(--primaryColor--dark);
			color: var(--primaryColor--dark);
		}

		@media screen and (max-width: 768px) {
			font-size: 14px !important;
		}

		&:hover {
			color: var(--primaryDarker);
			border-color: var(--primaryDarker);

			@media (prefers-color-scheme: dark) {
				color: var(--primaryDarker--dark);
				border-color: var(--primaryDarker--dark);
			}
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
