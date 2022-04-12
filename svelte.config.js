import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** svelte.config.js
 * configuration for SvelteKit's options and compiler
 * restart dev server after making any config changes
 */
const config = {
	kit: { 
		adapter: adapter(),
		prerender: {
			default: true
		}
	},
	extensions: ['.svelte', '.md', '.svx', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx', '.svelte.md'],
			layout: {
				posts: 'src/routes/posts/_post.svelte'
			},
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	]
};

export default config;
