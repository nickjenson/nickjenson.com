<script>
	import Icon from './Icon.svelte';
	export let disabled = false;
	export let icon;
	export let description;

	let className;
	// required for export of `class`
	export { className as class };
</script>

<button on:click {disabled} class={className} aria-label={description}>
	<slot />
	{#if description}
		<span aria-hidden="true">
			<Icon name={icon} />
		</span>
	{:else}
		<Icon name={icon} />
	{/if}
</button>
