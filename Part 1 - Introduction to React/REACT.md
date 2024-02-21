## Multiple components ##
```js
const App = () => {
    const helperFunction = () => 'Help function result'
    return (
        <div>
            {helperFunction()}
            <Hello/>
        </div>
    )
}
```
## Passing data to components
`props`
```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
```

## Destructuring
```js
const Hello = ({name,age}) => {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  )
}
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

## Complex state
> [!WARNING]  
> When setting state (`Object`,`Arrays`,..), a **new value** must be passed (no render if oldState === newState)

```js
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
```
