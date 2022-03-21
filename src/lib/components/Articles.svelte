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
		display: flex;
		margin-right: -15px;
		margin-left: -15px;
		flex-flow: row wrap;
	}


	@media screen and (min-width: 1200px) {
		div {
			display: flex;
			margin-right: -15px;
			margin-left: -15px;
			flex-flow: row wrap;
		}
	}
</style>
