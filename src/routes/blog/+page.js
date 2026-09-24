import { fetchPosts } from '$lib/utils/posts';

export const load = async () => {
	const posts = await fetchPosts();
	return {
		posts
	};
};
