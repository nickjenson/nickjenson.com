<script>
	import Typewriter from 'svelte-typewriter';
</script>

<h3>
	<Typewriter loop={5000} cursor={'#fff'} interval={[50, 60, 80]}>
		<span data-static>I am a</span>
	</Typewriter>
</h3>

<style>
	h3 {
		margin-top: 0;
	}
</style>
