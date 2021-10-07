<script>
  export let posts;
</script>

{#each posts as post}
  <a href={'/posts/' + post.slug.split('.')[0]}>
    <div class=content-link>
      <div class=titlebar>
        <h3>{post.title}</h3>
        <small>{post.published.split('T')[0]}</small>
      </div>
      <small>{post.description}</small>
    </div>
  </a>
{/each}

<style>
  .content-link {
    margin-bottom: 0.5rem;
  }
  .content-link:not(:last-child) {
    border-bottom: solid 1px var(--border-color);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .titlebar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 0;
    padding: 0;
  }
</style>