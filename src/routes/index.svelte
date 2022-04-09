<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();
		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	import Icon from '$lib/components/Icon.svelte';
	import Link from '$lib/components/Link.svelte';
	import Articles from '$lib/components/Articles.svelte';
	export let posts;
</script>

<section id="hero">
	<div>
		<h1>Nick Jenson</h1>
		<p><Icon name="breifcase" /> Team Lead, Canvas LMS @ Instructure</p>
		<p><Icon name="pin" /> Portland, OR</p>
		<div class="hero-buttons">
			<Link button="true" primary="true" href="https://github.com/nickjenson" icon="github"
				>follow on GitHub</Link
			>
			<Link button="true" href="https://github.com/nickjenson" icon="code">View Source</Link>
		</div>
	</div>
	<div>
		<h2>Recent Articles</h2>
		<Articles {posts} />
	</div>
</section>

<style>
	div > p {
		margin: 0;
	}
	#hero {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		padding: 3rem;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0 auto;
		height: fit-content;
		border-bottom: none;
	}
	.hero-buttons {
		padding: 1rem 0;
	}
	h2 {
		text-align: right;
		border-bottom: 1px solid var(--border);
		margin-bottom: 0;
	}
</style>
