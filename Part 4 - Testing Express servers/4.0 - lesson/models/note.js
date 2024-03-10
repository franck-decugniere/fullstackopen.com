const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 5,
        required: true
    },
    important: Boolean,
})

// Transform object to JSON in order to remove MongoDB specific elements and add an id
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
    }
})

// Public interface of the module is the Note model
module.exports = mongoose.model('Note', noteSchema)