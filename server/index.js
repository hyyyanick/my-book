const express = require('express');
const uuid    = require('uuid/v1');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
const list = [
  {
    id       : uuid(),
    question : "Q1 Quels sont les fruits que vous préférez",
    choices  : [
      "Banane", "Mangue", "Pomme"
    ],
    response : []
  },
  {
    id       : uuid(),
    question : "Q2 Quels sont les livres que vous préférez",
    choices  : [
      "La 5e Vague", "Sapiens", "Homos Deus"
    ],
    response : []
  },
  {
    id       : uuid(),
    question : "Q3 Quels sont les pays dans lesquels vous avez voyagés",
    choices  : [
      "La France", "La Chine", "L'Allemagne"
    ],
    response : []
  }
];

app.get('/items', (req, res) => {
  res.json(list);
});

app.get('/items/:id', (req, res) => {
  const item = list.find(item => item.id === req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.sendStatus(404);
  }
});

app.post('/items', (req, res) => {
  const { question } = req.body;

  if (!question) {
    res.sendStatus(400);
  } else {
    list.push({ id : uuid(), ...req.body });
    res.sendStatus(200);
  }
});

app.put('/items/:id', (req, res) => {
  const item = list.find(item => item.id === req.params.id);
  if (item) {
    Object.assign(item, req.body)
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/items/:id', (req, res) => {
  
  const index = list.findIndex(item => item.id === req.params.id);

  if (index >= 0) {
    list.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, err => {
  if (err) {
    throw err;
  }

  console.log('http://localhost:8080');
});
