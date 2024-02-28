[PART2/Rendering a collection, modules](https://fullstackopen.com/en/part2/rendering_a_collection_modules)

# Array
`find, filter, map, reduce`

## Rendering collection
```javascript
const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
    </div>
  )
}
```
>[!WARNING] ANTI-PATTERN - Array indexes as keys
> Wrong note updated if insert new item in list (index is shifted)
> ```js
> <ul>
>  {notes.map((note, i) => 
>    <li key={i}>
>      {note.content}
>    </li>
>  )}
></ul>
> ```

[PART2/Forms](https://fullstackopen.com/en/part2/forms)
# Access data from form

## Controlled component
Control an input with a state variable
```js
 const [firstName, setFirstName] = useState(''); 
  return (
    <input
      value={firstName} // ...force the input's value to match the state variable...
      onChange={e => setFirstName(e.target.value)} // ... and update the state variable on any edits!
    />
  )
```

```js
// ✅ Good: uncontrolled input with an initial value
<input defaultValue={something} />

// ✅ Good: controlled input with onChange
<input value={something} onChange={e => setSomething(e.target.value)} />

// ✅ Good: readonly controlled input without on change
<input value={something} readOnly={true} />

// 🔴 Bug: controlled checkbox with no onChange handler
<input type="checkbox" checked={something} />
```


[PART2/Getting data from server](https://fullstackopen.com/en/part2/getting_data_from_server)

Simulate backend using [json-server](https://github.com/typicode/json-server)
```sh
# Install json server globally (need admin)
npm install -g json-server

# Install json server as development dependency
npm install json-server --save-dev
```

# HTTP request in JS
## AJAX & `XMLHttpRequest` (old fashion 1999)

```js
const xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    // handle the response that is saved in variable data
  }
}
xhttp.open('GET', '/data.json', true)
xhttp.send()
```
## jQuery methods
```js
$.ajax({
  url: 'http://server/resource',
  type: 'GET', 
  success: function(result) {console.log(result)},
  error:function(error) {console.log(error)}
)
```
```js
$.get('http://server/resource', function(data, status) {console.log(data)})
```
```js
$.post('http://server/resource', {name:'franck'}, function(data, status) {console.log(data)})
```

## fetch
web API for async requests. Return a `Promise` (ES6)
```javascript
fetch(`some_api_url`).then((response) => {
  // This will get called when the promise fulfills
}).catch((error) => {
  // This will get called when the promise is rejected
}).finally(() => {
  // This will get called all the time
})
```

## axios
Like `fetch` but more pleasant to use.

```sh
npm install axios
```

```js
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
```

# Effect Hook
> [!NOTE] EFFECT HOOK
> Where the `axios.get()` command should be placed in the component ?

> Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library (synchronize jQuery widget with React state), and other non-React code.

[Effects vs Event](https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events)
> Two type of logic in React :
> - `Rendering code` take props, state, transform them, return JSX
> - `Event handlers` are nested functions inside components that do things, might update an input field, submit an HTTP POST request to buy a product, navigate user to another screen. They contain `side effects` (change the state) caused by a specific user action (a button click, a typing)
>
> `Effects` are side effects that are caused by rendering itself rather that by a particular event.

## How to to write an Effect
1. Declare an Effect - what is the Effect doing ?
2. Specify the Effect dependencies - should the Effect run after every render ?
3. Add cleanup (if needed) - if Effect "connect", it may need "disconnect"

```javascript
useEffect( () => {....}, [])
// Effect will be called :
// - after the 1st render
// - when the 2nd parameter changes
```

[PART2/CSS Style](https://fullstackopen.com/en/part2/adding_styles_to_react_app)

## CSS
Different way to add style
- css file
- CSS preprocessor 
- inline style (some limitations with pseudo-classes)

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics
https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor

>[!IMPORTANT] React philosophy
A component defines the HTML + JS + CSS

