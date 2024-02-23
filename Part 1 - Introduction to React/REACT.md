## Multiple components

```js
const App = () => {
  const helperFunction = () => "Help function result";
  return (
    <div>
      {helperFunction()}
      <Hello />
    </div>
  );
};
```

## Passing data to components

`props`

```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};
```

## Destructuring

```js
const Hello = ({ name, age }) => {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};
```

## Stateful component

State hook `useState` 

```js
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)

  return (
    <button onClick={increaseByOne}>plus</button>
    <div>{counter}</div>
  )
}
```
### Rules of Hooks
`useXXXX` must not be called from inside a loop, conditional expression, in order to make sure they are called in the same order

## Complex state

> [!WARNING] STATE IMMUTABILITY
> When setting state (`Object`,`Arrays`,..), a **new value** must be passed (no render if oldState === newState)
>
> > What is IMMUTABILITY ?
> >
> > - Make a copy of original
> > - Make change to copy
> > - Replace original with copy

> [!WARNING] UPDATE OF STATE IS ASYNCHRONOUS  
> `setTotal` will not have the correct `left` value

```js
const [clicks, setClicks] = useState({
  left: 0,
  right: 0,
});
const handleLeftClick = () => {
  setClicks({ ...clicks, left: clicks.left + 1 });
  setTotal(click.left + click.right);
};
```

## Event Handling
- event name is came case (ex: `onClick`)
- event handler is a function or reference to a function (can be a function call that returns a function)
- event handler starts with handle (ex: `handleLeftClick`)
- props that handles something - name it `onEvent`