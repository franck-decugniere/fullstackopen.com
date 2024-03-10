const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const middleware = require('./utils/middleware')
const Note = require('./models/note')
const logger = require('./utils/logger')
const notesRouter = require('./controllers/notes')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI_NOTES).then(
  result => logger.info("note>", "connected to MongoDB")
).catch(
  error => logger.info('error connecting to MongoDB:', error.message)
)

const app = express()
app.use(cors());
app.use(express.static('webapp')) // enable static content
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app