<script>
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<footer>
  <small>&copy; 2020-{new Date().getFullYear()}</small>
  <ThemeToggle />
</footer>

<style>
  footer {
    height: 52px;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem;
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