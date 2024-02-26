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
#