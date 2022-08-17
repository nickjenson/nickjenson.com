<script>
	import Link from './Link.svelte';
</script>

<footer>
	<div class="footer">
		<div>
			<Link button="true" href="https://github.com/nickjenson" icon="github" />
			<Link button="true" href="/rss.xml" icon="rss" />
		</div>
		Copyright &copy; 2022 Nick Jenson. All rights reserved.
	</div>
</footer>

<style>
	footer > div.footer {
		margin: 0 auto;
		max-width: var(--max-width);
	}
	footer > div.footer > div {
		display: flex;
		justify-content: end;
	}
	footer {
		margin-top: 2rem;
		width: 100%;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--border);
		background: var(--background-secondary);
		color: #a8a8a8;
	}
</style>
