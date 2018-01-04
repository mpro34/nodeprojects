var asyncAdd = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        res(a + b);
      } else {
        rej('Arguments must be numbers');
      }
    }, 1500);
  });
}

asyncAdd(5, 7).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, '33');
}).then((res) => {
  console.log('should be 45', res);
}).catch((err) => {
  console.log(err);
});
// var someProm = new Promise((resolve, reject) => {
//   //resolve('Hey, it worked!');
//   reject('Unable to fulfill promise');
// });
//
// someProm.then(
//   (msg) => {
//   console.log('Success: ', msg);
// }, (err) => {
//   console.log('Error: ', err);
// });
