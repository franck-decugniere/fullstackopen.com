[PART1](https://fullstackopen.com/en/part1) 

## React/Vite project
```sh
# Create a new project
#
# npm create vite =>
# - npm init create-vite
# - runs script defined in package.json

npm create vite@latest part1 -- --template react  
cd part1  

# Installs a package and any packages that it depends on (in node_modules folder)
# If package has a package-lock,  installation of dependencies will be driven by that
# A package is :
# - a folder with package.json
# - a gzip tar containing a package.json
# - a <name>@<version> published on the registry
# - a <name>@<tag> or <name> with "latest" tag
# - a <git remote url> that resolves to a folder with package.json
npm install  

npm run dev
```

[PART1/Javascript](https://fullstackopen.com/en/part1/java_script)
# Javascript 
## History
ECMAScript client-side & server-side scripting (node.js, deno, bun)  

Netscape Mocha -> LiveScript -> JavaScript

- 1997: JavaScript 1.1 (Netscape 3.0)
- 1999: JavaScript 1.2 (Netscape 4.0) - add regexp, better string handling, try/catch, numeric format output
- 2008 : 4th ed (abandonned) - ES4 - classe, module, type, generator, iterator, destructuring assignment
- 2009 : 5th ed - ES5 - add "strict mode", getter/setter, JSON, reflection on object properties
- 2015 : 6th ed - ES6, ES2015 
    - class declaration, binary data, typed arrays, maps/set/weakmap, reflection, proxies
    - ES module `import * from ".."`
    - arrow function `() => {..}`, `let`/`const`
    - Promises
    - template literals using \`
- 2016 : 7th ed - ES2016 - block-scoping, destructuring patterns, exponentiation operator for numbers `***`, `await`/`async` for async programming, array `include()`
- 2017 - 8th ed - ES2017 - `Object.values`, `Object.entries`,  `await`/`async`, string `padStart()`
- 2018 - 9th ed - ES2018 - spread operator `...` for object literals, async iteration, promise `finally()`
- 2019 - 10th ed - ES2019 - array `flat()  flatMap()`
- 2020 - 11th ed - ES2020 - Bigint, `globalThis` object, `??` operator (`const a = b ?? 3`), optional chaining `const zipcode = person?.address?.zipcode`
- 2021 - 12th ed - ES2021 - string `replaceAll()`, promise `any()`, AggregateError, WeakRef ref object withou preserving it from garbage collection, logical assignment operator `&&=, ||=, ??=`, separator for numeric literals `1_000`
- 2022 - 13th ed - ES2022 - top-level await, public/private instance fields, static fields, private instance methods, cause on Error objects, ...
- 2023 - 14th ed - ES2023 - Array `toSorted() toReversed() with() findLast() findLastIndex()`, ...

## Features
- Imperative & Structured  
- Weakly typed : typed asigned implicitly based on operation performed
- Dynamic : type associated with value rather than an expression
- Transpiling : "source-to-source" compilation (newer version of JS to older ES3)

## Tools
    Babel : transpilation
    Nodes.js : js runtime based on google's chrome V8

## Variables
```js
const x = 1 // constant
let y = 5 // variable
y = 'some text' // data type can change during execution
```

## Arrays
- Array is an object, the variable points to the same object. Content of the array can change !
- Iterate using `forEach`
```js
const t = [1, -1, 3]
t.forEach( value => console.log(value)) // 1, -1, 3

t.push(5)

// In React, stick to immutable data structure (functional programming paradigm)
// So better use concat() to create a new array instead of push()

const t2 = t.concat(5) // Create new array

const m1 = t.map(value => value * 2) // [2, -2, 6, 10]

// Destructuring
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t // rest = [3,4,5]
```

## Objects
```js
// Object literal
const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object3.department) // Stanford University
console.log(object3['department']) // Stanford University

// Add property
object3['newProperty'] = 'can_be_done_using_bracket_notation'
```

## Functions

### Arrow function
```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

// Single parameter
const square = p => {
  console.log(p)
  return p * p
}

// Single expression
const square = p => p * p
```

### Function expression
```js
const average = function(a,b) {
    return (a + b) / 2
}

console.log(average(2, 5)) // 3.5
```
