const express = require('express')
const cors = require("cors")
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

app.get("/api/notes/:id", (request, response) => {
  console.log(request.params.id)
  Note.find({ _id: request.params.id }).then(notes => {
    // better use Note.findById(request.params.id)
    console.log(notes)
    notes.length > 0 ? response.json(notes) : response.status(404).end()

  }).catch(error => {
    console.log("", error)
    response.status(500).json({ error: error })
  })
})

app.delete("/api/notes/:id", (request, response) => {
  Note.findByIdAndDelete(request.params.id).then(result => {
    console.log(result)
    response.status(204).end();
  })
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

app.put("/api/notes/:id", (request, response) => {
  Note.findByIdAndUpdate(request.params.id, request.body).then(
    result => {
      console.log(result)
      response.json(request.body)
    }
  )
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
