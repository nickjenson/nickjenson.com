<script>
	import Form from '$lib/components/Form.svelte';
</script>

<svelte:head>
	<title>About | Nick Jenson</title>
</svelte:head>

<section id="card">
	<div>
		<img id="memoji" src="/images/memoji.png" alt="Nick's Memoji" />
	</div>
	<h1>Hi, I'm Nick! 👋</h1>
	<p>I am a Technical Product Manager specializing in Student Information System (SIS) 
		integrations and data interoperability at Instructure.</p>
</section>

<Form />

<style>
	section h1,
	section div {
		display: flex;
		justify-content: center;
	}
	#card {
		padding: 2rem;
		background: var(--code);
		border-radius: var(--radius);
		max-width: 24rem;
		margin: auto;
	}
	#card p {
		margin: 0;
	}
	img {
		height: 10rem;
		border-radius: 50%;
		border: 2px solid var(--radius);
	}
</style>
