<script context="module">
	export const load = async ({ params, fetch }) => {
		const tag = params.tag;
		const response = await fetch('/api/posts.json');
		const posts = await response.json();

		const matched = posts.filter((post) => post.meta.tags.includes(tag));

		return {
			props: {
				posts: matched,
				tag: tag
			}
		};
	};
</script>

<script>
	export let posts;
	export let tag;
</script>

<svelte:head>
	<title>Nick Jenson | Posts tagged {tag}</title>
</svelte:head>

{#if posts.length}
	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
{:else}
	<p>Oops! No matching posts were found.</p>
{/if}
