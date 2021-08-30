<script>
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<footer>
  <small>&copy; 2020-{new Date().getFullYear()}</small>
  <ThemeToggle />
</footer>

<style>
  footer {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    background-color: var(--background-color);
    z-index: 2;
  }
  small {
    margin-top: .5rem;
  }
</style>