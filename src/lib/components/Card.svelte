<script>
  import Icon from './Icon.svelte'

  export let name;
  export let title;
  export let desc;
  export let href;
</script>

<div>
  <h4>
    <span class='icon'>
      <Icon {name} stroke='#181818' />
    </span>
    {title}
  </h4>
  <p>{desc}</p>
  <a {href}>Read more</a>
</div>

<style>
  div {
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: .875rem;
  }

  h4 {
    margin: 0;
    font-size: 1.125;
  }

  .icon {
    padding: .4rem 0;
    border-radius: var(--radius);
    background-color: var(--text);
  }
</style>