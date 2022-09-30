<script>
	export let text;	
	export let offset = 5;
	export let timeout = 250;
	
	let index = 0;
	let blink = false;
	
	let first = text.slice(0, text.length - offset);
	let last = text.slice(-offset);
	
	function type() {
		if (index < offset) { 
			char = last[index];
			first += char;
			index++;
			setTimeout(type, timeout);
		} else {
			blink = true
		}
	}
	
	$: char = index == offset ? " " : last[index];
	type();
</script>

<h1>
	{first}
	<span class:blink>{char}</span>
</h1>

<style>
	h1 {
		margin: 0;
		font-size: 1.8rem;
		font-family: var(--font-mono);
	}
	span {
		border-radius: 1px;
		position: absolute;
		vertical-align: baseline;
		color: var(--background);
		background-color: var(--text);
	}
	span.blink {
		height: 2rem;
		margin: .2rem .5rem;
		padding: 0 0.5rem;
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
