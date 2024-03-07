const express = require('express')
const cors = require('cors')
const Note = require('./models/note')

const app = express()
app.use(express.json())
app.use(cors());
app.use(express.static('webapp')) // enable static content

app.get("/", (request, response) => {
  response.send("<h1>Hello world</h1>");
});

app.get("/api/notes", (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
});

app.get("/api/notes/:id", (request, response, next) => {
  console.log(request.params.id)
  Note.findById(request.params.id).then(notes => {
    // better use Note.findById(request.params.id)
    console.log(notes)
    if (notes) {
      response.json(notes)
    } else {
      response.status(404).end()
    }
  }).catch(error => {
    // Pass error to next Express middleware
    next(error)
  })
})

app.delete("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      console.log(result)
      response.status(204).end();
    })
    .catch(error => next(error))
});

app.post("/api/notes", (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = new Note({
    content: body.content,
    important: body.important || false,
  })
  note.save().then(savedNote => {
    response.json(savedNote)
  })
});

app.put("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndUpdate(request.params.id, request.body)
    .then(result => {
        response.json(result)
      }
    )
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  // CastError : invalid object id for MongoDB
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
