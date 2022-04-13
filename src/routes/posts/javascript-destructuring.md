---
date: '2022-04-01'
updated: '2022-04-01'
title: Destructuring in JavaScript
description: Understanding how objects can be destructured in JavaScript
tags:
  - javascript
  - es6
  - destructuring
layout: posts
---

Object destructuring was introduced in ES6 and it provides an alternative syntax to assign properties of an object to variables.

Prior to ES6, if you wanted to assign a property of an object to a variable you would do it like so:

```javascript
let name = {
  first: 'Jane',
  last: 'Doe'
}

let firstName = name.first;
let lastName = name.last;
console.info(firstName); // => Jane
```

The object destructuring syntax allows us to accomplish the same variable assignment using:
```javascript
let { first: firstName, last: lastName } = name;
console.info(firstName); // => Jane
```

We see that the same `first` and `last` property values assigned to the variables `firstName` and `lastName`.

The basic syntax looks like this:
```javascript
let { property: variable } = object;
```
The colon `:` identifies the named property of the `object`, The value of that property is set as value of the variable we are assigning.

If the named property and name of the variable being set are the same, you can omit the property entirely.

Let's use our first example. If we wanted to set the variable `first` to hold the value of `name.first`, we could do it like so:
```javascript
let { first } = name;
console.info(first); // => Jane
// multiple
let { first, last } = name;
console.info(last); // => Doe
```

If a property doesn't exist, the variable will be set to `undefined`.

```javascript
let { nickName } = name;
console.info(nickName); // => undefined
```
You can set a default value if a property doesn't exist.
```javascript
let { nickName = 'Johny' } = name;
console.info(nickName); // => Johny
```

You can reference nested properties.
```javascript
let student = {
  id: 1,
  name: {
    first: 'John',
    middle: 'Wayne',
    last: 'Doe'
  }
}

let { name: { first, middle } } = student;
console.info(middle); // => Wayne
```

You can also extract values of properties where the key or name of a property is a string or would otherwise be an invalid variable name.
```javascript
let merchandise = {
  'type': 'shirt',
  'item-id': 249
}
let { 'item-id': id } = merchandise;
console.info(id); // => 249
```
