<script>
	import Icon from './Icon.svelte';
	export let href = undefined;
	export let icon = undefined;
	let className = undefined;
	export { className as class };
	export let button = false;
	export let primary = false;
	export let disabled = false;
</script>

<a on:click class:button class:primary class={className} {href} {disabled}>
	<slot />
	{#if icon}
		<Icon name={icon} />
	{/if}
</a>
