<script>
	import Icon from './Icon.svelte';
	export let href = undefined;
	export let icon = undefined;
	export let button = false;
	export let primary = false;
	export let disabled = false;
</script>

<a class:button class:primary {href} {disabled}>
	<slot />
	{#if icon}
		<Icon name={icon} />
	{/if}
</a>
