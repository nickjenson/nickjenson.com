<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '../app.css'
</script>

<Navbar />
  <main>
    <slot />
  </main>
<Footer />

<style>
  main {
    padding: 0 1rem;
    padding-bottom: 52px; /* footer height */
  }
</style>