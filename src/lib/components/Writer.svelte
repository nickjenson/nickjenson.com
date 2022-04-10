<script>
	import Typewriter from 'svelte-typewriter';
	let titles = ['Team lead', 'Consultant', 'Developer']

</script>


<div>
	{#each titles as title, i}
		<Typewriter scramble={2000} delay={i * 2000}>
			<span>{title}</span>
		</Typewriter>
	{/each}
</div>


<style>
	div {
		display: inline-flex;
	}
	span {
		margin:0;
		padding-right: 0.25rem;
		font-size: 1.2rem;
	}
</style>