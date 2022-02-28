<script context="module">
  export const load = ({ url }) => {
    const path = url.pathname

    return {
      props: {
        path
      }
    }
  }
</script>

<script>
  import '$lib/styles/global.css'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Header />
  <main>
    <slot />
  </main>
<Footer />

<style>
  main {
    margin: 0 auto;
    padding: 0 1rem 3rem;
  }
  @media screen and (min-width: 1200px) {
    main {
      max-width: 60vw;
    }
  }
</style>