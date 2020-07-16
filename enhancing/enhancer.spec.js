const enhancer = require('./enhancer.js')
// test away!

const testRepair = {
     name: 'test',
     enhancement: 13,
     durability: 69,
}

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
// REPAIR function testing
describe('repair', function () {
     it('should change durability to 100 from whatever it is', function () {
          expect(testRepair.durability).toBe(69)
          expect(enhancer.repair(testRepair)).toBeTruthy()
          expect(enhancer.repair(testRepair)).toEqual({
               ...testRepair,
               durability: 100,
          })
     })
})

// SUCCESS function testing
describe('success', function () {
     it('should add 1 to enhancement if less than 20', function () {
          expect(testSuccess.enhancement).toBe(16)
          expect(enhancer.success(testSuccess))
               .toEqual({
                    ...testSuccess,
                    enhancement: 17,
               })
     })
     it('should NOT add anything if enhancement is 20', function () {
          expect(testSuccess2.enhancement).toBe(20)
          expect(enhancer.success(testSuccess2))
               .toEqual({
                    ...testSuccess2,
                    enhancement: 20,
               })
     })
})

// FAIL function testing
describe('fail', function () {
     it('should decrease durability by 5 IF enhancement < 15', function () {
          // this one will decrease durability by 5 because it is less than 15
          expect(testFail1.enhancement).toBe(14)
          expect(enhancer.fail(testFail1))
               .toEqual({
                    ...testFail1,
                    enhancement: 14,
                    durability: 55
               })
     })

     it('should decrease durability by 10 IF enhancement >= 15', function () {
          // this one will decrease durability by 10 because it is gerater than 15
          expect(testSuccess.enhancement).toBe(16)
          expect(enhancer.fail(testSuccess))
               .toEqual({
                    ...testSuccess,
                    durability: 40
               })
     })
     it('should decrease enhancement level by 1 if it is greater than 16', function () {
          // this one will decrease durability by 10 because it is gerater than 15
          expect(testFail2.enhancement).toBe(19)
          expect(enhancer.fail(testFail2))
               .toEqual({
                    ...testFail2,
                    enhancement: 18,
                    durability: 65
               })
     })
})