<script>
	import Icon from './Icon.svelte';

	export let sticky = false;
	export let open = false;
</script>

<header class:sticky>
	<nav>
		<div class="mobile">
			<button on:click={() => open = !open}>
				<Icon name="menu" class="mobile"/>
			</button>
		</div>
		<div id="menu">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/posts">Articles</a>
			<a href="#demos">Demos</a>
		</div>
		<div>
			<a href="https://github.com/nickjenson">
				<Icon name="github" /> follow on GitHub
			</a>
			<!-- <a class="button" href="#">Sign In</a> -->
		</div>
	</nav>
</header>

<style>
	#menu {
		display: none;
	}

	.sticky {
		position: fixed;
		top: 0;
	}

	nav a {
		text-decoration: none;
		color: #eeeeee;
	}

	button {
		border: none;	
	}

	header {
		z-index: 2;
		width: 100vw;
		border-bottom: solid 1px var(--border);
		background-color: var(--background);
	}

	nav {
		padding: 1rem;
		margin: 0 auto;
		max-width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	@media screen and (min-width: 1200px) {
		nav {
			max-width: var(--max-width);
		}
		#menu {
			display: block;
		}
	}
</style>
