const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send({
  error: 'Page not found',
  name: 'Todo App v1.0'
  });
});

let names = [{
  name: "Chris"
}, {
  name: "Billy"
}, {
  name: "Emily"
}];
app.get('/users', (req, res) => {
  res.send(names)
})

app.listen(3000);

module.exports.app = app;
