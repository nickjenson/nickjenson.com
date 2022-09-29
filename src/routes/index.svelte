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
	import { onMount } from 'svelte';
	import { fly, fade } from "svelte/transition";
	import Icon from '$lib/components/Icon.svelte';
	import Link from '$lib/components/Link.svelte';
	import Articles from '$lib/components/Articles.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	export let posts;
	
	let onload = false
	onMount(() => onload = true)
</script>

<svelte:head>
	<title>Nick Jenson</title>
	<meta name="description" content="Software development portfolio and articles by Nick Jenson" />
</svelte:head>

<section id="hero">
	<img id="memoji"  src="/images/memoji.png" alt="Nick's Memoji" />
	<div class="columns">
		<div id="intro">
			<Cursor text="Nick Jenson" />
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
</section>

{#if onload}
	<section in:fly={{delay: 100, y:50, duration: 300}}>
		<div id="articles" in:fade={{duration: 300}}>
			<h2 class="border-bottom">Recent Articles</h2>
			<Articles {posts} />
		</div>
	</section>
{/if}

<style>
	h2 {
		margin: 0;
		letter-spacing: 0;
	}
	p {
		margin: 0.25em 0;
		color: var(--text);
	}
	#hero {
		padding: 2rem 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 3;
		justify-items: center;
		flex-direction: column;
	}
	.hero-buttons {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	#articles {
		width: 100%;
		margin: 0 auto;
	}
	.columns {
		width: 100%;
		flex-direction: column;
	}
	img,
	#intro {
		align-self: center;
	}
	#intro {
		padding: 1rem;
		width: 17rem;
		margin: 0 auto;
	}
	:global(.hero-buttons a.button) {
		margin: 0.25rem;
		padding: 0.5rem 1rem;
	}
	img {
		height: 10rem;
		width: 10rem;
		border-radius: 50%;
		border: 2px solid var(--border);
	}
	@media screen and (min-width: 1200px) {
		img {
			margin: 0 4rem;
			height: 12rem;
			width: 12rem;
		}
		#intro {
			justify-self: center;
			margin: 0;
		}
		#hero {
			margin: 6rem 0;
			justify-self: center;
			flex-direction: row;
		}
		.columns {
			width: initial;
			flex-direction: column;
			align-items: center;
		}
		section > div,
		.hero-buttons {
			width: initial;
			flex-direction: row;
		}
		#articles {
			max-width: calc(var(--max-width) - 20rem);
		}
	}
</style>
