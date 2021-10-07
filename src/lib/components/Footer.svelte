<script>
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<footer>
  <ThemeToggle />
</footer>

<style>
  footer {
    bottom: 0;
    display: flex;
    justify-content: end;
    height: calc(23px + 2rem);
    padding: 1rem;
    position: absolute;
    max-width: 100vw;
    z-index: 2;
  }
</style>