export const fetchPosts = async () => {
	const allPostFiles = import.meta.glob('/src/lib/posts/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			// Extract filename like 2020-05-15-Github-Method-Search.md
			const filename = path.split('/').pop().replace('.md', '');

			// Extract date and slug from filename YYYY-MM-DD-slug
			const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/);
			let date, slug;
			if (match) {
				date = match[1];
				slug = match[2];
			} else {
				date = metadata.date || '1970-01-01';
				slug = filename;
			}

			// Determine categories from path or frontmatter
			const categories = metadata.categories || [path.split('/')[4]];

			// We will use /blog/slug as the URL for all posts
			const postPath = `/blog/${slug}`;

			return {
				meta: {
					...metadata,
					title: metadata.title || slug.replace(/-/g, ' '),
					date: date,
					categories,
					tags: metadata.tags || (metadata.tag ? [metadata.tag] : [])
				},
				path: postPath,
				originalPath: path,
				slug
			};
		})
	);

	return allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
};
