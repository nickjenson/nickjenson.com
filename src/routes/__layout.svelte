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
	let nav = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Articles', href: '/posts' }
	];
</script>

<Header sticky="true" hamburger="true" {nav}>
	<span slot="utilities">
		<ThemeToggle />
	</span>
</Header>
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		justify-self: center;
		align-self: flex-start;
		padding: 2rem 1rem;
	}
	@media screen and (min-width: 1200px) {
		main {
			padding: 1rem 2rem;
			width: var(--max-width);
		}
	}
</style>
