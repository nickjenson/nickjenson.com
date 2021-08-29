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
	section {
		display: grid;
	}

	h3 {
		border-bottom: 1px solid var(--border-color);
	}

	#intro {
		text-align: center;
	}

  #intro, #content {
    padding: 2rem;
  }

	@media screen and (min-width: 1200px) {
		section {
			height: calc(100vh - (82px + 52px));
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
	}
</style>

