<script>
	import Icon from './Icon.svelte';
	export let text;

	const arr = text.split("");

	$: char = text[index];
	$: typedChar = ""

	let index = 0;

	function type() {
		if (index < text.length -1) {
			typedChar += text[index]
			index++;
		}
	}

	const typing = () => setInterval(type, 250);
	typing();
</script>

<h1>
	<Icon name="box" height="1.8rem" width="1.2rem" />{typedChar}
	<span>{char}</span>
</h1>

<style>
	h1 {
		margin: 0;
		margin-inline-start: -0.1em;
		font-family: var(--font-mono);
	}
	span {
		border-radius: 1px;
		position: absolute;
		vertical-align: baseline;
		color: var(--dark-text);
		background-color: var(--dark-background);
		animation: 1.2s blink step-end infinite;
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
