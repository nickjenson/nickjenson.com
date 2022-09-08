<script>
	import Icon from '$lib/components/Icon.svelte';
	import Tag from '$lib/components/Tag.svelte';
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
<div id="content">
	<slot />
</div>
{#if tags.length}
	<hr>
	<h3><Icon name="tag"/>Tags</h3>
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
		margin-top: 2rem;
	}
	#content {
		padding: 2rem 0;
	}
	#tags {
		padding: .5rem;
		display: inline-flex;
		list-style-type: none;
		padding-inline-start: 0;
		margin-block-start: 0;
	}
</style>