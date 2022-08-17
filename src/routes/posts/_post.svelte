<script>
	export let title;
	export let date;
	export let tags;
</script>

<svelte:head>
	<meta name="description" content="Software development portfolio and articles by Nick Jenson" />
	<title>Nick Jenson | {title}</title>
</svelte:head>

<h1>{title}</h1>
<p>Published: {date}</p>
<slot />
{#if tags.length}
	<div>
		<h3>Tags</h3>
		<ul>
			{#each tags as tag}
				<li>
					<a href="/posts/tags/{tag}">{tag}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
