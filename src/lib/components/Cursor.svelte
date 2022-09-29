<script>
	export let text;	
	const first = text.slice(0, text.length - 1);
	const last = text.slice(-1);
</script>

<h1>
	{first}
	<span>{last}</span>
</h1>

<style>
	h1 {
		margin: 0;
		font-family: var(--font-mono);
	}
	span {
		border-radius: 1px;
		position: absolute;
		vertical-align: baseline;
		color: var(--dark-text);
		background-color: var(--dark-background);
		animation: 1.6s blink step-end infinite;
	}
	@keyframes blink {
		from,
		to {
			background-color: var(--dark-background);
			color: var(--dark-text);
		}
		50% {
			background-color: var(--light-background);
			color: var(--light-text);
		}
	}
</style>
