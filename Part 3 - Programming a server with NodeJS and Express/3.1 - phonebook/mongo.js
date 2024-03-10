const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('node mongo.js <database password> <name> <phone number>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

// Connect to database
const url =
  `mongodb+srv://franckdecugniere:${password}@fullstackopen.ji2smzm.mongodb.net/phonebook?retryWrites=true&w=majority&appName=fullstackopen`
mongoose.set('strictQuery', false)


// Define Schema
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const addPerson = (name, number) => {
  mongoose.connect(url)
  const person = new Person({
    name: name,
    number: number,
  })
  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

const displayPhonebook = () => {
  mongoose.connect(url)
  console.log('Phonebook:')
  Person.find().then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

switch (process.argv.length) {
  case 3:
    displayPhonebook()
    break
  case 5:
    addPerson(name, number)
    break
  default:
}