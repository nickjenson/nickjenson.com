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
    padding: 1rem 1rem 3.25rem; /* 3.25rem is footer height */
  }
</style>