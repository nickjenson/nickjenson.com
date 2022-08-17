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
	:global(body){
		display: flex;
		flex-direction: column;
	}
	main {
		flex: 1;
		width: 100vw;
		justify-self: center;
		align-self: center;
		padding: 1rem;
		max-width: var(--max-width);
	}
</style>