<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const url = `./index.json`;
    const response = await fetch(url);
    if (response.ok) {
      const { posts } = await response.json();
      return {
        props: { posts },
      };
    }
    return {};
  }
</script>

<script>
  import ContentLink from '$lib/components/ContentLink.svelte';
  export let posts;
</script>

<section>
	<div id="intro">
    <img src="/assets/images/memoji.png" alt="Nick as a Memoji character">
		<h1>Nick Jenson</h1>
		<p>
      <a href="https://www.instructure.com/canvas">Canvas LMS</a> @ 
      <a href="https://www.instructure.com/">Instructure</a>
		</p>
    <div id="content">
		<h3>Articles</h3>
    <ContentLink {posts} />
		<!-- <h3>Demos</h3> -->
	</div>
	</div>

</section>

<style>
  h1 {
    margin-bottom: 1rem;
  }
  img {
    padding: 1rem;
    border-radius: 50%;
    height: 8rem;
  }
	section {
		display: flex;
    flex-wrap: wrap;
	}

	h3 {
    margin-bottom: 0.5rem;
		border-bottom: 1px solid var(--border-color);
	}
  #intro {
    width: 100vw;
    text-align: center;
  }

  #content {
    text-align: left;
  }

	@media screen and (min-width: 1200px) {
		section {
			height: calc(100vh - (60px + 55px));
		}
    img {
      height: 14rem;
    }
	}
</style>

