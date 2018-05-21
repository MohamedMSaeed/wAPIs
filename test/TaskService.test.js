const rewire = require('rewire');
const TaskService = rewire('../src/services/TaskService');


describe('list tasks', () => {
    let stubOnFindAllMethod;
    before(() => {
        stubOnFindAllMethod = sinon.stub()
    })
    it('find all tasks with the specified limit, pageNumber and sort', () => {

        CarrierService.sum(1, 2).should.equal(3)
    })
})