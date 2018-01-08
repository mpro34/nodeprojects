require('./config/config');
const _ = require('lodash');
let express = require('express');
let bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});;

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234124 (id)
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  //validate id using isValid
  if (!ObjectID.isValid(id)) {
    //else 404 - send back empty send
    return res.status(404).send();
  }
  //findById
  Todo.findById(id).then((todo) => {
  //success
    if (todo) {
      //if todo - send it back
      res.send({todo});
    } else {
      //if no todo - send back 404 with empty body
      res.status(404).send();
    }
  }, (err) => {
  //error
    //400 - and send empty body back
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    res.send({todo});
  }).catch((err) => {
    res.send(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }, (err) => {
    res.status(400).send();
  });
});


app.listen(3000, () => {
  console.log(`Starting on port ${port}`);
});

module.exports = {app};
