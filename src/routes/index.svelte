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
	import Writer from '../lib/components/Writer.svelte';
	import Icon from '../lib/components/Icon.svelte';
	import Articles from '../lib/components/Articles.svelte';
	export let posts;
</script>

<section id="hero">
	<div class="container">
		<h1>Nick Jenson</h1>
		<Writer />
		<p>
			<Icon name="briefcase" width="1.2em" height="1.2em" strokeWidth="1" />
			Team Lead, Canvas LMS @ Instructure
		</p>

		<p>
			<Icon name="map-pin" width="1.2em" height="1.2em" strokeWidth="1" />
			Portland, OR
		</p>

		<div class="container">
			
				<a href="https://github.com/nickjenson" class="button accent">
					<Icon name="github" />
					Follow on GitHub
				</a>
				<a href="https://github.com/nickjenson/nickjenson.com" class="button">
					<Icon name="code" />
					View Source
				</a>
			</div>

			
	</div>

</section>

<section class="articles">
	<h2>Recent Articles</h2>
	<Articles {posts} />
</section>


<section id="demos">
	<h2>Interactive Demos</h2>
</section>

<style>
	h1 {
		margin-bottom: 0;
	}

	#hero {
		padding: 4rem;
		margin: 0 auto;
		border-bottom: none;
	}

	#hero p {
		margin-block-start: 0.5em;
		margin-block-end: 0.5em;
	}

	section {
		padding: 2rem 0;
		height: 80vh;
		border-bottom: 1px solid var(--border);
	}
</style>
