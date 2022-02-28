<script>
	import { page } from '$app/stores';
</script>

<nav>
  <a class:home={$page.url.pathname === '/'} href="/">&larr; Home</a>
  <ul>
    <li>
      <a href="/posts">Posts</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>


<style>
 .home {
		visibility: hidden;
	}
	nav a {
		text-decoration: none;
		color: var(--color);
	}
	nav {
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
    border-bottom: solid 1px var(--border)
	}
	li {
		position: relative;
		display: inline-block;
		list-style: none;
	}
	li:not(:last-of-type) {
		margin-right: 0.25rem;
	}
</style>