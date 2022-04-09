<script>
	export let posts;
</script>

{#each posts as post}
	<div class="article">
		<a href={post.path}>
			<div class="titlebar">
				<h3>{post.meta.title}</h3>
				<small>{post.meta.date}</small>
			</div>
			<p>{post.meta.description}</p>
			<small class="link">Read more &rarr;</small>
		</a>
	</div>
{/each}

<style>
	.article:not(:first-of-type) {
		padding: 0.5rem 0;
	}
	.titlebar {
		display: flex;
		justify-content: space-between;
	}
	h3 {
		margin: 0;
	}
	p {
		margin: 0;
	}
	a {
		padding-top: 0.25rem;
		color: inherit;
		text-decoration: none;
	}
	small.link {
		color: var(--primary);
	}
</style>
