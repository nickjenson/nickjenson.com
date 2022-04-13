---
date: '2022-04-09'
updated: '2022-04-09'
title: Why Svelte.js
description: Working with Svelte.js
tags:
  - javascript
  - svelte
layout: posts
---

Svelte is different than other popular font-end component frameworks because in short, Svelte is **primarily a compiler**.

The compile step happens when you build your app. Whereas it's predecessors, React and Vue do the bulk of their work at runtime.

It doesn't use a virtual DOM and instead the DOM is manipulated directly.

>Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes - [svelte.dev](https://svelte.dev)

Svelte easy to write and understand thanks to it's familiar markup written into `.svelte` files using a superset of HTML. All three sections of the following are optional:
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
	function handleClick () {
		count += 1;
	}
</script>
```

Here is the same function with markup within a single svelte component:
```svelte
<script>
	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

Not bad, right? Check out more examples from the Svelte team [here](https://svelte.dev/tutorial/basics). 