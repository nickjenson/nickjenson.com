<script>
	export let open = false
</script>

<aside class:open>
	<nav>
		<a href="#about">About</a>
		<a href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}

	nav {
		min-width: 100%;
		height: 100vh;
	}

	.open {
		left: 0
	}
</style>