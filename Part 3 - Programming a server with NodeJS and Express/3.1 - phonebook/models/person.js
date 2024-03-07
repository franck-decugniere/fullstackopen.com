const mongoose = require("mongoose")

const url = process.env.MONGODB_URI_NOTES
mongoose.set('strictQuery', false)


mongoose.connect(url).then(
    result => console.log("note> connected to MongoDB")
).catch(
    error => console.log('error connecting to MongoDB:', error.message)
)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

// Transform object to JSON in order to remove MongoDB specific elements and add an id
personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
    }
})



// Public interface of the module is the Note model
module.exports = mongoose.model('Person', personSchema,'people')