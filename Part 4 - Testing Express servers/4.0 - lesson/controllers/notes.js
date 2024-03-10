const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get("/", (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
});

notesRouter.get("/:id", (request, response, next) => {
  logger.info(request.params.id)
  Note.findById(request.params.id).then(notes => {
    // better use Note.findById(request.params.id)
    logger.info(notes)
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

notesRouter.delete("/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      logger.info(result)
      response.status(204).end();
    })
    .catch(error => next(error))
});

notesRouter.post("/", (request, response, next) => {
  const body = request.body;
  const note = new Note({
    content: body.content,
    important: body.important || false,
  })
  note.save().then(savedNote => {
    response.json(savedNote)
  })
    .catch(error => next(error))
});

notesRouter.put("/:id", (request, response, next) => {
  Note.findByIdAndUpdate(
    request.params.id,
    request.body,
    { runValidators: true }
  )
    .then(result => {
      response.json(result)
    }
    )
    .catch(error => next(error))
})

module.exports = notesRouter