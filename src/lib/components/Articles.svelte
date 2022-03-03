<script>
	import Card from './Card.svelte';
	export let posts;
</script>

<div>
	{#each posts as post}
		<Card name="edit-3" title={post.meta.title} desc={post.meta.description} href={post.path} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-column-gap: 6rem;
		-moz-column-gap: 6rem;
		column-gap: 6rem;
	}
</style>
