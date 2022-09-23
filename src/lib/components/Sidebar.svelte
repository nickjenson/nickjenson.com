<script>
	import Link from './Link.svelte';
	export let nav = [];
	export let open;
</script>

<aside class:open>
	<nav>
		<h3>Menu</h3>
		<ul>
			{#each nav as link}
				<li>
					<Link class="button" on:click={() => (open = false)} href={link.href}>{link.title}</Link>
				</li>
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
		top: calc(-100vh - var(--header-height));
		transition: top 0.2s ease-in-out;
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
