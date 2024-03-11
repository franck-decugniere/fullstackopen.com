[PART4/introduction to testing](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing)

# Node project structure

```sh
├── index.js (starts Express server)
├── app.js (connection to DB, configure Express middleware app.use(...) )
├── webapp
│   └── ... (ReactJS distribution)
├── controllers
│   └── notes.js (configure Express Router, implement GET/POST/PUT/... )
├── models
│   └── note.js (Mongoose schema)
├── package-lock.json
├── package.json
├── utils
│   ├── config.js (Express port, MongoDB URI, ...)
│   ├── logger.js
│   └── middleware.js (custom Express middleware)
```

# Testing
Node testing libraries :
- Mocha
  - Automated test support
  - Support node & browser env
  - Can run test in //
  - Mock API
- Jest (originally developed by Facebook, OpenJS Foundation since 2022)
  - Evaluate impact of code changes by comparing **test snapshots**
  - Run unit and integration tests
  - Can run test in //
- Vitest
- built-in node:test
  
## Node node:test
Node:test expects by default that the names of test files contain `.test.`
```js
test('test description', () => {
  const result = testSomething()
  assert.strictEqual(result, expectedResult)
})

describe('some tests', () => {
  test('First test', () => {})
  test('Second test', () => {})
}
```
