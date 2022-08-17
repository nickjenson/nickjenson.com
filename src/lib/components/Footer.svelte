<script>
	import Link from './Link.svelte';
</script>

<footer>
	<div class="social">
		<Link button="true" href="https://github.com/nickjenson" icon="github" />
		<Link button="true" href="/rss.xml" icon="rss" />
	</div>
	Copyright &copy; 2022 Nick Jenson. All rights reserved.
</footer>

<style>
	footer {
		margin-top: 2rem;
		width: 100%;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--border);
		background: var(--background-secondary);
		color: #a8a8a8;
	}
	footer .social {
		display: flex;
		justify-content: end;
	}
</style>
