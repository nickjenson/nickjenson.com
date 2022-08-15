<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const all = await posts.json();
		const latest = all.slice(0, 3);

		return {
			props: {
				posts: latest
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
	<div id="intro">
		<h1>Nick Jenson</h1>
		<p><Icon name="briefcase" /> Canvas LMS @ Instructure</p>
		<p><Icon name="map-pin" /> Portland, OR</p>
		<div class="hero-buttons">
			<Link button="true" primary="true" href="https://github.com/nickjenson" icon="github">
			Follow on GitHub
			</Link>
			<Link button="true" href="https://github.com/nickjenson/nickjenson.com" icon="code">View Source</Link>
		</div>
	</div>
	<div id="articles">
		<h2>Recent Articles</h2>
		<Articles {posts} />
	</div>
</section>

<style>
	div > p {
		margin: 0.25rem 0;
		color: var(--text)
	}
	section > div {
		min-height: 40vh;
		display: grid;
		grid-template-columns: 1fr;
    align-content: center;
		justify-content: center;
		justify-self: center;
	}
	#hero {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		flex-wrap: wrap;
		align-items: center;
		border-bottom: none;
	}
	.hero-buttons {
		padding: 1rem 0;
	}
	h1,
	h2 {
		margin: 0;
	}
	h2 {
		border-bottom: 1px solid var(--border);
	}
	#articles {
		width: 100%;
	}
</style>
