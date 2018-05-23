import ApiBase from '../../core/ApiBase';

class TasksApi extends ApiBase {
  static listTasks() {
    return this.request('/api/tasks')
      .then(tasks => tasks.data);
  }
}

export default TasksApi;
