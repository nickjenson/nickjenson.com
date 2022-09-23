<script>
	import Sidebar from './Sidebar.svelte';
	import Button from './Button.svelte';
	import Link from './Link.svelte';
	export let nav = [];
	export let hamburger = false;
	export let sticky = false;
	let open = false;
</script>

<header class:sticky>
	{#if hamburger}
		<Button class="menu" icon={open ? 'x' : 'menu'} on:click={() => (open = !open)} />
	{/if}
	<slot />
	<div>
		<nav>
			{#each nav as link}
				<Link class="button" href={link.href}>{link.title}</Link>
			{/each}
		</nav>
		<slot name="utilities" />
	</div>
</header>

{#if hamburger}
	<Sidebar {nav} bind:open />
{/if}

<style>
	header {
		background-color: var(--background);
		z-index: 9999;
		padding: 0.5rem;
		height: var(--header-height);
		display: flex;
		justify-content: space-between;
	}
	nav {
		display: none;
		align-items: center;
		justify-content: center;
	}
	header div {
		display: inline-flex;
	}
	.sticky {
		position: sticky;
		top: 0;
		z-index: 9999;
	}
	@media screen and (min-width: 1200px) {
		header {
			padding: 0 calc((100vw - var(--max-width)) / 2);
			justify-content: flex-end;
		}
		nav {
			display: flex;
		}
	}
</style>
