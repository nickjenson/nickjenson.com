<script context="module">
	export const load = ({ url }) => {
		return {
			props: {
				path: url.pathname
			}
		};
	};
</script>

<script>
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Link from '$lib/components/Link.svelte';
	let path;
	let nav = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Articles', href: '/posts' }
	];
</script>

<!-- <svelte:head>
	{#if nav[$page.pathname]}
		<meta name="description" content="Software development portfolio and articles by Nick Jenson" />
		<title>Nick Jenson | {nav[path]}</title>
	{:else}
		<title>Nick Jenson</title>
	{/if}
</svelte:head> -->

<Header --background="#181818" --color="#fefefe" sticky="true" hamburger="true" {nav}>
	<Link href="/">
		<div id="logo" />
	</Link>
	<span slot="utilities">
		<ThemeToggle />
		<Link button="true" href="https://github.com/nickjenson" icon="github" />
		<Link button="true" href="/rss.xml" icon="rss" />
	</span>
</Header>
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		margin: auto;
		padding: 2rem 1rem;
	}
	@media screen and (min-width: 1200px) {
		#logo {
			display: block;
		}
		main {
			padding: 3rem;
			max-width: var(--max-width);
		}
	}
</style>
