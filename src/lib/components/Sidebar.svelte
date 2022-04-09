<script>
	import { browser } from '$app/env';
	import Link from './Link.svelte';
	export let nav = [];
	export let open = false;

	$: if (browser) document.body.classList.toggle('open', open);
</script>

<aside class:open>
	<nav>
		{#each nav as link}
			<Link href={link.href}>{link.title}</Link>
		{/each}
	</nav>
</aside>

<style>
	aside {
		z-index: 9999;
		background: var(--background);
		position: absolute;
		left: -100%;
		transition: left 0.3s ease-in-out;
	}
	nav {
		width: 100vw;
		height: 100vh;
	}
	.open {
		left: 0;
	}
</style>
