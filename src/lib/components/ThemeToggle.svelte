<script>
	import { writable } from 'svelte/store';
	const options = ['light', 'dark', 'auto'];

	export const theme =
		typeof localStorage === 'undefined' ? null : writable(localStorage.getItem('theme') ?? 'auto');

		theme?.subscribe((value) => {
			localStorage.setItem('theme', value);
			window.document.body.classList.remove(...options);
			window.document.body.classList.add(value);
		});
	
</script>

<div class="color-scheme-toggle" role="radiogroup" tabindex="0" aria-label="Select a color scheme preference">
	{#each options as value}
		<label data-color-scheme-option={value}>
			<input type="radio" name="themes" {value} bind:group={$theme} />
			<div class="text">{value}</div>
		</label>
	{/each}
</div>

<style>
	.color-scheme-toggle {
		border: 1px solid var(--primary);
		border-radius: var(--font-size);
		display: inline-flex;
		user-select: none;
    align-self: flex-end;
    width: fit-content;
	}
	.color-scheme-toggle:hover,
	.color-scheme-toggle > label:hover {
		cursor: pointer;
	}
	.color-scheme-toggle input:checked + .text {
		color: var(--background-light);
		background-color: var(--primary);
		border-radius: var(--font-size);
	}
	label > div.text {
		text-transform: capitalize;
		color: var(--primary);
		margin: 1px;
		padding: 1px 6px;
		line-height: 1.33337;
		letter-spacing: -0.01em;
	}
	input[type='radio'] {
		padding: 1px;
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(0px 0px 99.9% 99.9%);
		overflow: hidden;
		appearance: none;
		height: 1px;
		width: 1px;
		padding: 0;
		border: 0;
	}
</style>
