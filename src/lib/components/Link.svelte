<script>
	import Icon from './Icon.svelte';
	export let href = undefined;
	export let icon = undefined;
	let className = undefined;
	export { className as class };
	export let disabled = false;
</script>

<a on:click class={className} {href} disabled={disabled}>
	<slot />
	{#if icon}
		<Icon name={icon} />
	{/if}
</a>
