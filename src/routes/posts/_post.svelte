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

<div class="title-bar">
	<h1>{title}</h1>
	<p>{formatDate(date)}</p>
</div>
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
	:global(#content > p:first-of-type:first-letter){
		float: left;
		line-height: 3rem;
		font-size: 3.5rem;
		border: solid;
		padding: 3px;
		margin: 0 5px -5px;
		font-family: Georgia, 'Times New Roman', Times, serif
	}
	div.title-bar {
		border-bottom: 1px solid var(--border);
	}
	h3 {
		padding-top: 2rem;
		border-top: 2px solid var(--border);
	}
	#content {
		margin: auto;
		max-width: 1000px;
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
