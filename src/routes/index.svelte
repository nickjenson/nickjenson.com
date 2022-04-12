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
	import Writer from '$lib/components/Writer.svelte';
	export let posts;
</script>

<section id="hero">
	<div>
		<h1>Nick Jenson</h1>
		<Writer />
		<p><Icon name="briefcase" /> Team Lead, Canvas LMS @ Instructure</p>
		<p><Icon name="map-pin" /> Portland, OR</p>
		<div class="hero-buttons">
			<Link 
				button="true" 
				primary="true" 
				href="https://github.com/nickjenson" 
				icon="github">
				Follow on GitHub
			</Link>
			<Link 
				button="true" 
				href="https://github.com/nickjenson" 
				icon="code">
				View Source
			</Link>
		</div>
	</div>
	<div>
		<h2>Recent Articles</h2>
		<Articles {posts} />
	</div>
</section>

<style>
	div > p {
		margin: 0.75rem 0;
	}
	#hero {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2rem;
		padding: 3rem;
		align-items: center;
		flex-wrap: wrap;
		margin: 0 auto;
		height: fit-content;
		border-bottom: none;
	}
	.hero-buttons {
		padding: 1rem 0;
	}
	h1 {
		margin-bottom: 0;
	}
	h2 {
		border-bottom: 1px solid var(--border);
		margin-bottom: 0;
	}
	@media screen and (min-width: 1200px) {
		h2 {
			text-align: right;
		}
		#hero {
			grid-template-columns: repeat(2, minmax(30vw, auto));
			justify-content: space-around;
		}
	}
</style>
