<script>
	import Icon from './Icon.svelte';
	export let icon = undefined;
	export let iconDescription = undefined;
	let className = undefined;
	export { className as class };
	export let disabled = false;
	export let tabindex = undefined;
</script>

<button on:click {disabled} {tabindex} class={className} aria-label={iconDescription}>
	<slot />
	{#if iconDescription}
		<span aria-hidden="true">
			<Icon name={icon} />
		</span>
	{:else}
		<Icon name={icon} />
	{/if}
</button>
