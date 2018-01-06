const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
      // if (res !== 44) {
      //   throw new Error(`Expected 44, instead got ${res}`);
      // }
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })

  describe('#square', () => {
    it('should square the number', () => {
      let res = utils.square(3);

      expect(res).toBe(9).toBeA('number');
      // if (res !== 4) {
      //   throw new Error(`Expected 4, instead got ${res}`);
      // }
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(3, (res) => {
        expect(res).toBe(9).toBeA('number');
        done();
      });
    });
  });

});


// it('should verify first and last names are set', () => {
//   let user = {
//     location: 'irvine'
//   };
//   let res = utils.setName(user, "Chris Whiting");
//   expect(res).toInclude({
//     firstName: "Chris",
//     lastName: "Whiting"
//   });
// });

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   //expect({name: 'chris'}).toNotEqual({name: 'Chris'});
//   //expect([2,3,4]).toExclude(5);
//   expect({
//     name: 'chris',
//     age: 25,
//     location: 'irvine'
//   }).toInclude({
//     age: 25
//   })
//
// });
