<script>
  import Navbar from '$lib/Navbar.svelte'
  import Footer from '$lib/Footer.svelte'
  import '../app.css'
</script>

<Navbar />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    padding: 1rem 3rem;
  }
</style>