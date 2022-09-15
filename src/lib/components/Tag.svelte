<script>
  import Icon from './Icon.svelte';
  export let href;
  export let tag;
</script>

<a class="tag" {href}>
  &num;{tag}
</a>

<style>
  .tag {
    background-color: var(--primary);
    color: var(--text);
    font-weight: 500;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0 0.25rem;
    border-radius: 2px;
  }
</style>