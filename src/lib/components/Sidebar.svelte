<script>
	import { browser } from '$app/env';
	import Link from './Link.svelte';
	export let nav = [];
	export let open = false;
	$: if (browser) document.body.classList.toggle('open', open);
</script>

<aside class:open>
	<nav>
		<h3>Menu</h3>
		<ul>
			{#each nav as link}
				<li><Link on:click={() => (open = !open)} href={link.href}>{link.title}</Link></li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	ul {
		padding-inline-start: 1rem;
	}
	li {
		color: var(--color) !important;
		list-style: none;
		margin: 0.25rem 0;
	}
	aside {
		padding: 2rem 0;
		z-index: 9998;
		color: var(--color);
		background: var(--background);
		position: fixed;
		top: -100vh;
		transition: top 0.3s ease-in-out;
	}
	nav {
		padding: 2rem;
		width: 100vw;
		height: 100vh;
	}
	.open {
		top: 0;
	}
</style>
