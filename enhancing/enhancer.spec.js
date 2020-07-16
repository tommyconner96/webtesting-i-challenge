const enhancer = require('./enhancer.js')
// test away!

// REPAIR function testing
describe('repair', function () {
     // test data
     const testRepair = {
          name: 'test',
          enhancement: 13,
          durability: 69,
     }
     it('should change durability to 100 from whatever it is', function () {
          expect(testRepair.durability).toBe(69)
          expect(enhancer.repair(testRepair)).toBeTruthy()
          expect(enhancer.repair(testRepair)).toEqual({
               ...testRepair,
               //ensuring that durabililty is changed to 100
               durability: 100,
          })
     })
})

// SUCCESS function testing
describe('success', function () {
     // test data
     const testSuccess = {
          name: 'player1',
          enhancement: 16,
          durability: 50
     }

     const testSuccess2 = {
          name: 'player2',
          enhancement: 20,
          durability: 50
     }

     it('should add 1 to enhancement if less than 20', function () {
          expect(testSuccess.enhancement).toBe(16)
          expect(enhancer.success(testSuccess))
               .toEqual({
                    ...testSuccess,
                    // adding 1, making it 17 instead of 16 in this case
                    enhancement: 17,
               })
     })
     it('should NOT add anything if enhancement is 20', function () {
          expect(testSuccess2.enhancement).toBe(20)
          expect(enhancer.success(testSuccess2))
               .toEqual({
                    ...testSuccess2,
                    // ensures that enhancement stays at 20 and does not 
                    // get added anything
                    enhancement: 20,
               })
     })
})

// FAIL function testing
describe('fail', function () {
     // test data
     const testFail1 = {
          name: 'player3',
          enhancement: 14,
          durability: 60
     }

     const testFail2 = {
          name: 'player4',
          enhancement: 19,
          durability: 75
     }

     const testFail3 = {
          name: 'player1',
          enhancement: 16,
          durability: 50
     }

     it('should decrease durability by 5 IF enhancement < 15', function () {
          // this one will decrease durability by 5 because it is less than 15
          expect(testFail1.enhancement).toBe(14)
          expect(enhancer.fail(testFail1))
               .toEqual({
                    ...testFail1,
                    // checks that it went from 60 to 55
                    durability: 55
               })
     })

     it('should decrease durability by 10 IF enhancement >= 15', function () {
          // this one will decrease durability by 10 because it is greater than 15
          expect(testFail3.enhancement).toBe(16)
          expect(enhancer.fail(testFail3))
               .toEqual({
                    ...testFail3,
                    // checks that it went from 50 to 40
                    durability: 40
               })
     })
     it('should decrease enhancement level by 1 if it is greater than 16', function () {
          // this one will change the enhancement level from 19 to 18, and still also
          // change the durability from 75 to 65
          expect(testFail2.enhancement).toBe(19)
          expect(enhancer.fail(testFail2))
               .toEqual({
                    ...testFail2,
                    enhancement: 18,
                    durability: 65
               })
     })
})

// STRETCH
// GET

describe('get', function () {
     // test data
     const testGet1 = {
          name: 'testGet 1',
          enhancement: 0,
          durability: 69,
     }

     const testGet2 = {
          name: 'test Get 2',
          enhancement: 10,
          durability: 72
     }
     it('should not change the name if enhancement is 0', function () {
          expect(testGet1.enhancement).toBe(0)
          // expect(enhancer.get(testGet1.name)).toEqual(testGet1.name)
          const getData = enhancer.get(testGet1)
          expect(getData.name).toBe(testGet1.name)

     })
     it('should include enhancement level with + sign if greater than 0', function () {
          expect(testGet2.enhancement).toBe(10)
          // expect(enhancer.get(testGet2.name)).toBe(`[+` + testGet2.enhancement + `]` + testGet2.name)
          const getData = enhancer.get(testGet2)
          expect(getData.name).toBe(`[+` + testGet2.enhancement + `]` + testGet2.name)
          console.log(getData.name)
     })
})
