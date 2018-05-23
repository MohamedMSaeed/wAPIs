import ApiBase from '../../core/ApiBase';

class TasksApi extends ApiBase {
  static listTasks() {
    return this.request('/api/tasks')
      .then(tasks => tasks.data);
  }
  static updateStatus(taskId, updatedStatus){
    return this.request(`/api/tasks/${taskId}`, {
      method: 'PUT',
      body: updatedStatus
    })
  }
}

export default TasksApi;
