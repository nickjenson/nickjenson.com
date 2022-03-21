<script>
	import Icon from './Icon.svelte';

	export let name;
	export let title;
	export let desc;
	export let href;
</script>

<div>
	<h4>
		<span class="icon">
			<Icon {name} stroke="#181818" width="1rem" height="1rem" />
		</span>
		{title}
	</h4>
	<p>{desc}</p>
	<a {href}>Read more</a>
</div>

<style>
	div {
		padding: 1.5rem;
		border-radius: var(--radius);
	}

	a {
		color: var(--color-grey);
		text-decoration: none;
	}

	p {
		font-size: 0.875rem;
	}

	h4 {
		margin: 0;
		font-size: 1.125;
	}

	.icon {
		border-radius: var(--radius);
		background-color: var(--text);
	}

	@media screen and (min-width: 1200px) {
		div {
			padding: 1rem;
		}
	}
</style>
