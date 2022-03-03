<script>
  import Icon from '../components/Icon.svelte'
  export let sticky = false;
</script>

<header class:sticky={sticky}>
  <nav>
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/posts">Articles</a>
      <a href="/#demos">Demos</a>
    </div>
    <div>
      <a href="https://github.com/nickjenson">
        <Icon name="github" /> follow on GitHub
       </a>
      <a class="button" href="/login">Sign In</a>
    </div>
  </nav>
</header>



<style>
  .sticky {
    position: fixed;
    top: 0;
  }

	nav a {

		text-decoration: none;
		color: #eeeeee
	}

  nav a.button {
    background-color: var(--color-dark-grey);
  }

  header {
    z-index: 2;
    width: 100vw;
    border-bottom: solid 1px var(--border);
    background-color: var(--background);
  }

	nav {
    padding: 1rem 0;
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
	}
</style>