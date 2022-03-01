<script>
  import Card from './Card.svelte'
  export let posts;
</script>

<div>
  {#each posts as post}
    <Card name='edit-3' title={post.meta.title} desc={post.meta.description} href={post.path} />
  {/each}
</div>

<style>
  div {
    width: max-content;
    display:flex;
    justify-content: space-between;
  }
</style>
