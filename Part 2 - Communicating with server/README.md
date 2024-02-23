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

