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

## Debugging node app
```sh
# VSCode
launch.json (via Add Configuration)

# Chrome dev tools
node --inspect index.js
```

# Express
```sh
npm install express
```

## Start server
```js
const express = require('express')
const app = express()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

## Routes
```js
app.get('/', (request,response) => {
    response.send('<h1>Hello</h1>')
})

// Fetch single resource
app.get('/api/notes/:id', (request, response) => {
    const id = request.params.i
})

// Return JSON
response.json(obj)

// Return status
response.status(404).end()
```

## Middleware
```js
// enable json-parser that parses POST json body
app.use(express.json())
...
request.body // contains the unmarshalled JSON

// custom middleware
const customMiddleware = (req, res, next) => {
    // do something
    .....
    // Call next middleware
    next()
}
app.use(customMiddleware)
```

If a `Middleware` is added after the `Route` declarations, it will be used for requests made to non-existent routes (unknown route handling, error handling,... )

Some popular middleware :
- body-parser - parses request bodies and populates `req.body`
- morgan - request logger
- cors - enable Cross Origin Resource Sharing
- helmet - secure express app by setting various HTTP headers
- compression - compresses response bodies
- cookie-parser - parse cookie and populates `req.cookies`
- session - enables session management
- passport - enables authentication
- express-validator - validates & sanitizes user input
- multer - handles `multipart/form-data
  



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
| URL      | verb     | functionality                                                    |
| -------- | -------- | ---------------------------------------------------------------- |
| notes/10 | `GET`    | fetches a single resource                                        |
| notes    | `GET`    | fetches all resources in the collection                          |
| notes    | `POST`   | creates a new resource based on the request data                 |
| notes/10 | `DELETE` | removes the identified resource                                  |
| notes/10 | `PUT`    | replaces the entire identified resource with the request data    |
| notes/10 | `PATCH`  | replaces a part of the identified resource with the request data |

# MongoDB
Document database (NoSQL)

[MongoDB Atlas - database on Cloud](https://www.mongodb.com/atlas/database)

## Mongoose
```sh
# Object Document Mapper for MongoDB
npm install mongoose
``` 

### Schema
Each `Schema` maps to a MongoDB `collection` and defines the shape of a `document` within the collection.

```js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
```

### Model
`Model` is responsible for creating and reading documents from the MongoDB database. There are compiled from `Schema`definitions.

```js
// CREATE DOCUMENT
const Blog = mongoose.model('Blog', blogSchema);
const myBlog = new Blog({....})
await myBlog.save() // save document to MongoDB
// or
await Blog.create({....})
```

```js
// READ DOCUMENT
await Blog.find({ author: 'Franck'}).where('date').gt(oneYearAgo).exec()
```

```js
// DELETE DOCUMENT
await Blog.deleteOne({....})
```

### Document
`Document`is an instance of its model. It's a 1-to-1 mapping to documents stored in MongoDB.

# Lint
```sh
# Install ESLint as dev dep
npm install eslint --save-dev

# Configure ESlint
npm init @eslint/config
or
npx eslint --init

# Install plugin
to check if needed

# Apply lint
npx eslint index.js

# ignore some files
cat .eslintignore
webapp 
