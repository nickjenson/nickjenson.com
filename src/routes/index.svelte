<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  import Icon from '../lib/components/Icon.svelte'
  import Articles from '../lib/components/Articles.svelte'
  export let posts;

</script>


<section id='hero'>
  <div class='container'>
    <h1>Nick Jenson</h1>
    <p><Icon name='briefcase' width='1.2em' height='1.2em' strokeWidth='1' />
    Team Lead, Canvas LMS @ Instructure</p>

    <p><Icon name='code' width='1.2em' height='1.2em' strokeWidth='1' /> 
    Develop websites and apps for fun</p>

    <p><Icon name='map-pin' width='1.2em' height='1.2em' strokeWidth='1' /> 
      Portland, OR</p>

  </div>

  <div class='container'>
    <h2>Recent Articles</h2>
    <Articles {posts} />
  </div>
</section>



<section>
  <h2>Interactive Demos</h2>

</section>


<style>
  #hero {
    padding: 6rem 0;
  }

  #hero p {
    margin-block-start: .5em;
    margin-block-end: .5em;
  }

  section {
    padding: .5rem 0;
    height: 80vh;
    border-bottom: 1px solid var(--border)
  }
</style>