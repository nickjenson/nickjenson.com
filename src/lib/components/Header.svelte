<script>
	import Sidebar from './Sidebar.svelte';
	import Button from './Button.svelte';
	import Link from './Link.svelte';
	export let nav = [];
	export let hamburger = false;
	export let sticky = false;
	export let open = false;
</script>

<header class:sticky>
	<div id="header" >
		{#if hamburger}
			<Button class="menu" icon={open ? 'x' : 'menu'} on:click={() => (open = !open)} />
		{/if}
		<slot />
		<div>
			<nav>
				{#each nav as link}
					<Link button="true" href={link.href}>{link.title}</Link>
				{/each}
			</nav>
			<slot name="utilities" />
		</div>
	</div>
</header>

{#if hamburger}
	<Sidebar {nav} {open} />
{/if}

<style>
	#header {
		width: inherit;
		display: flex;
		justify-content: space-between;
		
		max-width: var(--max-width);
	}
	header {
		background: var(--background);
		width: 100%;
		z-index: 9999;
		padding: 0.5rem 1rem;
		height: var(--header-height);
		display: flex;
		justify-content: space-around;
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
		nav {
			display: flex;
		}
	}
</style>
