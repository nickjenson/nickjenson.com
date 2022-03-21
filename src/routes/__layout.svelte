<script context="module">
	export const load = ({ url }) => {
		const path = url.pathname;

		return {
			props: {
				path
			}
		};
	};
</script>

<script>
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let open;
</script>

<Header sticky="true" bind:open />
<main>
	<slot />
</main>
<Footer />

{#if open}
	<Sidebar />
{/if}

<style>
	main {
		max-width: 100vw;
		margin: 3rem auto 0;
		padding: 0 1rem 3rem;
	}

	@media screen and (min-width: 1200px) {
		main {
			margin-top: 3.75rem;
			max-width: var(--max-width);
		}
	}
</style>
