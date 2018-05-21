

const TaskService = require('../src/services/TaskService');
const TaskModel = require('../database/models').tasks;
const constants = require('../constants');
const rewire = require('rewire');


const rewiredTaskService = rewire('../src/services/TaskService');

describe('Task Service', () => {
  describe('list', () => {
    let findAllTaskModellMock;
    let countTaskModelMock;

    const pageNumber = 1;
    const limit = 10;
    const sort = 'status';
    beforeAll(() => {
      findAllTaskModellMock = jest.spyOn(TaskModel, 'findAll').mockResolvedValue({});
      countTaskModelMock = jest.spyOn(TaskModel, 'count').mockResolvedValue({});
    });
    afterAll(() => {
      findAllTaskModellMock.mockRestore();
      countTaskModelMock.mockRestore();
    });
    it('should find all tasks with the specified limit, pageNumber and sort', () => TaskService.list(pageNumber, limit, sort)
      .then(() => {
        expect(TaskModel.findAll).toBeCalledWith(expect.objectContaining({
          order: [[sort, 'ASC']],
          limit,
        }));
      }));
    it('should get count of all tasks', () => TaskService.list(pageNumber, limit, sort)
      .then(() => {
        expect(TaskModel.count).toBeCalled();
      }));
    it('should return error if list fails', () => {
      findAllTaskModellMock = jest.spyOn(TaskModel, 'findAll').mockRejectedValue(new Error('findAll fails'));
      return TaskService.list(pageNumber, limit, sort)
        .then(() => {
          expect({}).toBeCalled();
        }).catch((err) => {
          expect(err.message).toEqual('something went wrong');
        });
    });
  });
  describe('update', () => {
    const taskId = 1001;
    const updatedStatus = 'completed';
    let getTaskServiceMock;
    let updateTaskModelMock;

    beforeAll(() => {
      getTaskServiceMock = jest.spyOn(TaskService, 'get').mockResolvedValue({ status: 'pending' });
      updateTaskModelMock = jest.spyOn(TaskModel, 'update').mockResolvedValue({});
    });
    afterAll(() => {
      getTaskServiceMock.mockRestore();
      updateTaskModelMock.mockRestore();
    });
    it('should get the target task to update', () => TaskService.update(taskId, updatedStatus)
      .then(() => {
        expect(TaskService.get).toBeCalledWith(taskId);
      }));
    it('should return error if target task not found', () => {
      getTaskServiceMock = jest.spyOn(TaskService, 'get').mockRejectedValue(new Error('not found'));
      return TaskService.update(taskId, updatedStatus)
        .then(() => {
          expect({}).toBeCalled();
        }).catch((err) => {
          expect(err.message).toEqual('not found');
        });
    });
    it('should return error if task is not pending', () => {
      getTaskServiceMock = jest.spyOn(TaskService, 'get').mockResolvedValue({ status: 'completed' });
      return TaskService.update(taskId, updatedStatus)
        .then(() => {
          expect({}).toBeCalled();
        }).catch((err) => {
          expect(err.message).toEqual('task not pending');
        });
    });
    it('should update the target task with the new updated status', () => {
      getTaskServiceMock = jest.spyOn(TaskService, 'get').mockResolvedValue({ status: 'pending' });
      return TaskService.update(taskId, updatedStatus)
        .then(() => {
          expect(TaskModel.update).toBeCalledWith(expect.objectContaining({
            status: updatedStatus,
          }), expect.objectContaining({
            where: { id: taskId },
          }));
        });
    });
    it('should return error if update fails', () => {
      getTaskServiceMock = jest.spyOn(TaskService, 'get').mockResolvedValue({ status: 'pending' });
      updateTaskModelMock = jest.spyOn(TaskModel, 'update').mockRejectedValue(new Error('update failed'));
      return TaskService.update(taskId, updatedStatus)
        .then(() => {
          expect({}).toBeCalled();
        }).catch((err) => {
          expect(err.message).toEqual('something went wrong');
        });
    });
  });
  describe('get', () => {
    const taskId = 1001;
    let taskModelFindOneMock;
    beforeAll(() => {
      taskModelFindOneMock = jest.spyOn(TaskModel, 'findOne').mockResolvedValue({});
    });
    afterAll(() => {
      taskModelFindOneMock.mockRestore();
    });
    it('should get the target task', () => TaskService.get(taskId)
      .then(() => {
        expect(TaskModel.findOne).toBeCalledWith({
          where: { id: Number(taskId) },
        });
      }));
    it('should return error if task is not found', () => {
      taskModelFindOneMock = jest.spyOn(TaskModel, 'findOne').mockResolvedValue(null);
      return TaskService.get(taskId)
        .then(() => {
          expect({}).toBeCalled();
        }).catch((err) => {
          expect(err.message).toEqual('task not found');
        });
    });
  });
  describe('isTaskStatusPending', () => {
    const isTaskStatusPending = rewiredTaskService.__get__('isTaskStatusPending');
    it('should return true if task status is equal to pending', () => {
      const task = {
        status: constants.TASK_STATUS.PENDING,
      };
      expect(isTaskStatusPending(task)).toEqual(true);
    });
  });
});
