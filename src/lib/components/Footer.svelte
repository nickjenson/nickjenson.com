<script>
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<footer>
  <div class="container">
    <ThemeToggle />
    <small>&copy; 2020-{new Date().getFullYear()} Nick Jenson</small>
  </div>
</footer>

<style>
  footer {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    background-color: var(--background-color);
    z-index: 2;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  small {
    margin-top: .5rem;
  }
</style>