<script>
	export let text;	
	let offset = 3;
	let index = 0;
	let typing = true;
	let char = ""
	
	let first = text.slice(0, text.length - offset);
	const last = text.slice(-offset);
	
	function type() {
		if (index < offset) { 
			char = last[index];
			first += char;
			index++;
		} else {
			typing = false;
		}
	}
	$: char = typing ? last[index] : " "
	$: typed = if(typing) return () => setTimeout(type, 600);
	typed();
</script>

<h1>
	{first}
	<span>{char}</span>
</h1>

<style>
	h1 {
		margin: 0;
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
