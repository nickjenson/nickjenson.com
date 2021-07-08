<script>
  import { page } from '$app/stores'
</script>

<nav>
  <div>Nick Jenson</div>
  <ul>
    <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
    <li><a href="https://github.com/nickjenson">GitHub</a></li>
  </ul>
</nav>

<style>
  nav a {
    text-decoration: none;
    color: var(--color)
  }
  nav {
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: solid 1px var(--border-color);
  }
  li {
    position: relative;
    display: inline-block;
    list-style: none;
  }
  li:not(:last-of-type){
    margin-right: .25rem;
  }
</style>