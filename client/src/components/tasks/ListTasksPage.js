import React, { Component } from 'react';
import TasksApi from './TasksApi';
import ListTasksView from './ListTasksView';
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer';
class ListTasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalTasks: [],
      tasks: [],
      count: 0,
      direction: {
        fromLocation: '',
        toLocation: ''
      }
    };
    this.onSortClick = this.onSortClick.bind(this);
    this.sort = this.sort.bind(this);
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.search = this.search.bind(this);
    this.onUpdateStatusClick = this.onUpdateStatusClick.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.onShowPathOnMapClick = this.onShowPathOnMapClick.bind(this);
  }
  componentDidMount() {
    TasksApi.listTasks()
      .then((result) => {
        this.setState({
          tasks: result.tasks,
          count: result.count,
          originalTasks: result.tasks,
        });
      }).catch((err) => {
        console.log(err);
        alert('error fetching data from server');
      });
  }
  sort(sortBy) {
    const { tasks } = this.state;
    tasks.sort((a, b) => {
      const taskA = a[sortBy].toUpperCase(); // ignore upper and lowercase
      const taskB = b[sortBy].toUpperCase(); // ignore upper and lowercase
      if (taskA < taskB) {
        return -1;
      }
      if (taskA > taskB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      tasks,
    });
  }
  search(text) {
    if (!text) {
      return this.setState({
        tasks: this.state.originalTasks,
      });
    }
    const tasks = this.state.originalTasks;
    const searchResult = tasks.filter(task => task.driverName.toLowerCase().includes(text) || task.courier.toLowerCase().includes(text) || task.status.toLowerCase().includes(text));
    return this.setState({
      tasks: searchResult,
    });
  }
  onSortClick(sortBy) {
    this.sort(sortBy);
  }
  onChangeSearchInput(e) {
    const text = e.target.value;
    this.search(text.toLowerCase());
  }
  onUpdateStatusClick(taskId, updatedStatus) {
    TasksApi.updateStatus(taskId, {
      status: updatedStatus,
    })
      .then(() => {
        this.updateTaskStatus(taskId, updatedStatus);
      }).catch(() => {
        alert('error updating task');
      });
  }
  updateTaskStatus(taskId, updatedStatus) {
    const tasks = this.state.originalTasks;
    const updatedTasks = tasks.map(currentTask => (currentTask.id === taskId ? { ...currentTask, status: updatedStatus } : currentTask));
    this.setState({
      originalTasks: updatedTasks,
      tasks: updatedTasks,
    });
  }
  onShowPathOnMapClick(fromLocation, toLocation) {
    this.setState({
      direction: {
        fromLocation, toLocation,
      }
    })
  }

  render() {
    return (
            <div id="tasks">
                <input type="text" id="search" placeholder="Search for Driver Name or Carrier or Status" onInput={this.onChangeSearchInput}/>
                <ListTasksView tasks={this.state.tasks} totalCount={this.state.count} onSortClick={this.onSortClick} onUpdateStatusClick={this.onUpdateStatusClick} showPathOnMap={this.onShowPathOnMapClick}/>
                {this.state.direction.fromLocation && <MapWithADirectionsRenderer
                  fromLocation={this.state.direction.fromLocation}
                  toLocation={this.state.direction.toLocation}
                />}

            </div>
    );
  }
}

export default ListTasksPage;
