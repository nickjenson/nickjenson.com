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
    margin: 0 auto;
  }
  @media screen and (min-width: 1200px) {
    main {
      max-width: 60vw;
    }
  }
</style>