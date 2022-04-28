<script>
	import Sidebar from './Sidebar.svelte';
	import Button from './Button.svelte';
	import Link from './Link.svelte';
	export let nav = [];
	export let hamburger = false;
	export let sticky = false;
	export let open = false;
</script>

<div id="header" class:sticky>
	<header>
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
	</header>
</div>

{#if hamburger}
	<Sidebar {nav} {open} />
{/if}

<style>
	#header {
		display: flex;
		justify-content: space-around;
		border-bottom: solid 1px var(--border);
		background: var(--background);
	}
	header {
		max-width: var(--max-width);
		width: 100%;
		height: var(--header-height);
		display: flex;
		justify-content: space-between;
	}
	nav {
		display: none;
		align-items: center;
		justify-content: center;
	}
	nav::after {
		content: '';
		width: 1px;
		background: var(--border);
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
