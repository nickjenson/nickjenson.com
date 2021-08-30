<script>
  import { page } from '$app/stores'
  import Icon from './Icon.svelte'
</script>

<nav>
  <a class:home={$page.path === '/'} href="/">&larr; Home</a>
  <ul>
    <!-- <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li> -->
    <li><a href="https://github.com/nickjenson"><Icon name="github" height=1.5rem width=1.5rem/></a></li>
  </ul>
</nav>

<style>
  .home {
    visibility: hidden;
  }
  nav a {
    text-decoration: none;
    color: var(--color)
  }
  nav {
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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