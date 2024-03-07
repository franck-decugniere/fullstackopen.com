const express = require('express')
const morgan = require("morgan");
const Person = require("./models/person")

const app = express();
app.use(express.json()); // json middleware that parse raw json into js object & assign it to request.body
app.use(express.static('webapp')) // enable static content

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

// Create custom middleware
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

//app.use(requestLogger);

app.get("/info", async (request, response) => {
  const persons = await Person.find()
  let responseHtml = `<p>Phonebook has info for ${persons.length} people</p>`;
  responseHtml += new Date();
  response.send(responseHtml);
});

app.get("/api/persons", async (request, response) => {
  const persons = await Person.find({})
  response.json(persons)
});

app.get("/api/persons/:id", async (request, response, next) => {
  try {
    const person = await Person.findById(request.params.id)
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)

  }
});

app.delete("/api/persons/:id", async (request, response, next) => {
  const id = request.params.id;
  try {
    const person = await Person.findByIdAndDelete(id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
});

app.post("/api/persons", async (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const count = await Person.countDocuments({ name: body.name })
  console.log(count)
  if (count > 0) {
    response.status(409).end();
  } else {
    const person = new Person({
      name: body.name,
      number: body.number
    })
    const returnedPerson = await person.save()
    response.json(returnedPerson);
  }
})

app.put("/api/persons/:id", async (request, response, next) => {
  const id = request.params.id
  try {
    const person = await Person.findByIdAndUpdate(id, request.body)
    response.json(person)
  } catch (error) {
    next(error)
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);


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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
