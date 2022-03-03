<script>
	export let title;
	export let date;
	export let tags;
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />

{#if tags.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each tags as tag}
				<li>
					<a href="/posts/tags/{tag}">
						{tag}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
