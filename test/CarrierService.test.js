const CarrierService = require('../src/services/CarrierService');



describe('get the sum of two numbers', () => {
    it('should return 3', ()=>{
        CarrierService.sum(1, 2).should.equal(3)
    })
})