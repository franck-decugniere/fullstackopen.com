[PART3/Node.js and Express](https://fullstackopen.com/en/part3/node_js_and_express)

# npm 
## Semantic versioning
https://docs.npmjs.com/about-semantic-versioning

```json
express": "^4.18.2"
major.minor.patch
```
> ~1.0.0 : everything in the same minor version range (1.0.0, 1.0.1, 1.0.2, etc...)
> 
> ^1.0.0 : everything in the same major version range (1.0.0, 1.0.1, 1.1.0, 1.2.0, 1.2.1,...)


# Node.js

```javascript
// index.js
console.log('hello world')
```

```sh
node index.js
hello world
`````

## Import module
ES6 modules : 
```js
export http
import http from 'http'
```

CommonJS modules:
```js
const http = require('http')
````

Node.js uses by default `CommonJS` modules.

# Express
```sh
npm install express
```

# nodemon
restart node application if file changes

```sh
npm install --save-dev nodemon
node_modules/.bin/nodemon index.js

// package.json
"dev": "nodemon index.js", -- non native script so needs npm **run** dev
npm run dev
```
# REST
|URL|verb|functionality|
|-|-|-|
|notes/10|	`GET`	|fetches a single resource|
|notes	|`GET`|	fetches all resources in the collection|
|notes|	`POST`|	creates a new resource based on the request data|
|notes/10|	`DELETE`|	removes the identified resource|
|notes/10|	`PUT`|	replaces the entire identified resource with the request data|
|notes/10|	`PATCH`|	replaces a part of the identified resource with the request data|

