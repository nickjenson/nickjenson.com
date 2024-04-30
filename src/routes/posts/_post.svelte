<script>
	import Icon from '$lib/components/Icon.svelte';
	import Tag from '$lib/components/Tag.svelte';
	export let title;
	export let desc;
	export let date;
	export let tags;

	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-us', {
			weekday: "long",
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	};
</script>

<svelte:head>
	<meta name="description" content={desc} />
	<title>{title} | Nick Jenson</title>
</svelte:head>

<h1>{title}</h1>
<p>Published: {formatDate(date)}</p>
<div id="content">
	<slot />
</div>
{#if tags.length}
	<h3><Icon name="tag" />Tags</h3>
	<ul id="tags">
		{#each tags as tag}
			<li>
				<Tag href="/posts/tags/{tag}" {tag} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	h3 {
		padding-top: 2rem;
		border-top: 2px solid var(--border);
	}
	#content {
		padding: 1rem 0;
	}
	#tags {
		padding: 0.5rem;
		display: inline-flex;
		list-style-type: none;
		padding-inline-start: 0;
		margin-block-start: 0;
	}
</style>
