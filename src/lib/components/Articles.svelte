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
	.article {
		padding: 0.5rem;
		border-radius: var(--radius);
		margin: 0.5rem 0;
	}
	.titlebar {
		display: grid;
		grid-template-columns: 3fr 1fr;
	}
	.titlebar > small {
		text-align: right;
	}
	p,
	h3 {
		margin: 0;
	}
	a {
		padding-top: 0.25rem;
		color: inherit;
		text-decoration: none;
	}
	.article:hover {
		transition-duration: 0.2s;
		background-color: var(--hover);
		cursor: pointer;
	}
	small.link {
		color: var(--primary);
	}
</style>
