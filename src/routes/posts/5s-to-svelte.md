---
date: '2022-04-09'
updated: '2022-04-27'
title: Five Seconds to Svelte
description: A brief intro to Svelte
tags:
  - javascript
  - svelte
layout: posts
---

Svelte is different than other popular font-end component frameworks because in short, Svelte is **primarily a compiler**.

The compile step happens when you build your app and unlike React, or Vue, it doesn't use a virtual DOM and instead the DOM is manipulated directly.

> Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes - [svelte.dev](https://svelte.dev)

Svelte is nice to work with and understand thanks to its familiar markup written into `.svelte` files using a superset of HTML.

All three sections of the following are optional:

```svelte
<script>
	// logic goes here
</script>

	<!-- markup goes here -->

<style>
	/* styles go here */
</style>
```

Assign a value to a locally declared variable to change component state and trigger a re-render. In the example below, calling `handleClick` will trigger an update if the markup references `count`.

```svelte
<script>
	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>
```

The same function is used in the example component below:

```svelte
<script>
	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
```

`$:` marks a top-level statement as reactive. They run before the component updates, whenever the values it depends on have changed.

```svelte
<script>
	export let length;

	// Svelte declares `triangle` and `square` for us
	$: triangle = length * 3;
	$: square = length * 4;
</script>
```

Svelte also has easy-to-follow [docs](https://svelte.dev/docs) to help you get started. Learn better hands-on? Try their [tutorials](https://svelte.dev/tutorial/basics).
