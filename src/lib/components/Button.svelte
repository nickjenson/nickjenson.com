<script>
	import Icon from './Icon.svelte';
	export let icon = undefined;
	// export let iconDescription = undefined;
	let className = '';
	export { className as class };
	export let disabled = false;
	export let tabindex = '0';
</script>

<button on:click {disabled} {tabindex} class={className}>
	<slot />
	{#if icon}
		<Icon name={icon} />
	{/if}
</button>
