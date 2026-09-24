import { fetchPosts } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const posts = await fetchPosts();
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	// Import the markdown component using Vite's glob import
	const allPostFiles = import.meta.glob('/src/lib/posts/**/*.md');
	const postResolver = allPostFiles[post.originalPath];

	if (!postResolver) {
		throw error(404, 'Post module not found');
	}

	const postContent = await postResolver();

	return {
		post,
		Content: postContent.default
	};
};
