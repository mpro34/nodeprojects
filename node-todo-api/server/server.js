let express = require('express');
let bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

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


app.listen(3000, () => {
  console.log('Starting on port 3000');
});

module.exports = {app};
