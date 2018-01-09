const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
}

let token = jwt.sign(data, '123abc');
console.log(token);

console.log(jwt.verify(token, '123abc'));

// let message = 'I am user 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);
//
// // let data = {
// //   id: 4
// // };
// //
// // let token = {
// //   data,
// //   hash: SHA256(JSON.stringify(data)).toString()
// // };
// //
// // // token.data.id = 5;
// // // token.hash = SHA256(JSON.stringify(token.data)).toString();
// //
// // let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// //
// // if (resultHash === token.hash) {
// //   console.log('Data was not changed');
// // } else {
// //   console.log('Data was changed, do not trust');
// // }
