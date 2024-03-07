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

let phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/info", async (request, response) => {
  console.log("before await", new Date())
  const persons = await Person.find()
  console.log("after await", new Date(), persons)
  let responseHtml = `<p>Phonebook has info for ${persons.length} people</p>`;
  responseHtml += new Date();
  response.send(responseHtml);
  /*
  Person.find({}).then(persons => {
    console.log(persons)
    let responseHtml = `<p>Phonebook has info for ${persons.length} people</p>`;
    responseHtml += new Date();
    response.send(responseHtml);
  })
  */
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then(persons => response.json(persons))
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      console.log(person)
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(500).json({ error: error })
    })

});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Person.findByIdAndDelete(id)
    .then(person => {
      console.log(person)
      response.status(204).end();
    })
    .catch(error => console.log(error))
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  if (phonebook.filter((p) => p.name === body.name).length > 0) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  phonebook.push(person);
  response.json(person);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const generateId = () => {
  return Math.round(Math.random() * 1000);
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
