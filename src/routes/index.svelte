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
			Sr Technical Consultant for <a href="https://www.instructure.com/canvas">Canvas LMS</a> @
			<a href="https://www.instructure.com/">Instructure</a>
		</p>
	</div>
	<div id="content">
		<h3>Articles</h3>
    <ContentLink {posts} />
		<h3>Demos</h3>
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
		display: grid;
	}

	h3 {
    margin-bottom: 0.5rem;
		border-bottom: 1px solid var(--border-color);
	}

	#intro {
		text-align: center;
	}

	@media screen and (min-width: 1200px) {
		section {
			height: calc(100vh - (59px + 51px));
      grid-row: 1;
		}

		#intro {
			grid-column: 1;
			grid-row: 1;
		}

		#content {
			grid-column: 2 / 6;
			grid-row: 1;
			text-align: left;
      padding: 2rem 3rem 2rem 0;
		}
    img {
      height: 14rem;
    }
	}
</style>

