<script>
  export let posts;
</script>

{#each posts as post}
  <a href={'/posts/' + post.slug.split('.')[0]}>
    <section>
      <div class=titlebar>
        <h4>{post.title}</h4>
        <span>{post.published.split('T')[0]}</span>
      </div>
      <p>{post.description}</p>
    </section>
  </a>
{/each}

<style>
  section {
    border-bottom: solid 1px var(--border-color);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  .titlebar {
    margin-top: .5rem;
    width: 100%;
    display: grid;
    align-items: center;
  }

  span {
    grid-column: 4;
		grid-row: 1;
    text-align: right;
  }

  h4 {
    grid-column: 1/3;
		grid-row: 1;
    margin-bottom: 0;
    padding: 0;
  }
</style>