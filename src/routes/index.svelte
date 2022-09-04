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
	import Cursor from '$lib/components/Cursor.svelte';
	export let posts;
</script>

<svelte:head>
	<title>Nick Jenson | Home</title>
</svelte:head>

<section id="hero">
	<div class="columns">
		<img id="memoji" src="/images/memoji.png" alt="Nick's Memoji" />
		<div id="intro">
			<div id="details">
				<h1>Nick Jenson <Cursor /></h1>
				<p><Icon name="briefcase" /> Canvas LMS @ Instructure</p>
				<p><Icon name="map-pin" /> Portland, OR</p>
			</div>
			<div class="hero-buttons">
				<Link class="button primary" href="https://github.com/nickjenson" icon="github">
					Follow on GitHub
				</Link>
				<Link class="button outline" href="https://github.com/nickjenson/nickjenson.com" icon="code">
					View Source
				</Link>
			</div>
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
		color: var(--text);
	}
	section > div {
		width: 100%;
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
	#hero > .columns {
		display: flex;
		flex-direction: column;
	}
	img,
	#intro {
		align-self: center;
	}
	#intro {
		display: inline-flex;
		flex-direction: column;
		width: 100%;
	}
	#details {
		align-self: center;
	}
	.hero-buttons {
		padding: 1rem 0;
	}
	:global(.hero-buttons a.button){
		margin: 0.5rem 0.25rem;
		padding: 0.5rem 1rem;
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
	img {
		margin: 0.5rem;
		height: 10rem;
		width: 10rem;
		border-radius: 50%;
		border: 2px solid var(--border);
	}
	@media screen and (min-width: 1200px) {
		img {
			height: 13rem;
			width: 13rem;
		}
		#intro {
			text-align: left;
			max-width: fit-content;
			justify-self: center;
			padding: 2rem;
		}
		#hero {
			margin: 2rem;
			justify-self: center;
		}
		#hero > .columns {
			flex-direction: row;
			align-items: center;
		}
	}
</style>
