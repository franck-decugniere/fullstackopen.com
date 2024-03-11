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