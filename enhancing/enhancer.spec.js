const enhancer = require('./enhancer.js');
// test away!

const testRepair = {
    name: 'test',
    enhancement: 13,
    durability: 69,
}

describe('repair', function(){
    it('should change durability to 100 from whatever it is', function(){
         expect(testRepair.durability).toBe(69)
         expect(enhancer.repair(testRepair)).toBeTruthy()
         expect(enhancer.repair(testRepair)).toEqual({
              ...testRepair,
              durability: 100,
         })
    })
})