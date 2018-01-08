const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findOneAndRemove({_id: '5a52d7cbfaa38b271baf137e'}).then((res) => {

});

// Todo.findByIdAndRemove('5a52d7cbfaa38b271baf137e').then((todo) => {
//   console.log(todo);
// });
