<script>
	import feather from 'feather-icons';
	export let width = '1rem';
	export let height = '1rem';
	export let rotation = 0;
	export let name;
	export let stroke;
	export let strokeWidth;

	$: icon = feather.icons[name];
	$: if (icon) {
		if (stroke) icon.attrs['stroke'] = stroke;
		if (strokeWidth) icon.attrs['stroke-width'] = strokeWidth;
	}
</script>

{#if icon}
	<svg {...icon.attrs} style="width: {width}; height: {height}; transform: rotate({rotation}deg);">
		<g>
			{@html icon.contents}
		</g>
	</svg>
{/if}

<style>
	svg {
		top: 0.125em;
		margin: 0 0.125em;
		position: relative;
		overflow: visible;
	}
</style>
