<script>
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<footer>
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
    justify-content: flex-end;
    width: 100vw;
    background-color: var(--background-color);
    z-index: 2;
  }
</style>