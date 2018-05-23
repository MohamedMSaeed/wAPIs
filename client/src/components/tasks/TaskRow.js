import React from 'react';
import './ListTasksView.css';

const TaskRow = ({ task, onUpdateStatusClick }) => (
        <tr className="task">
          <td>{task.courier}</td>
          <td>{task.driverName}</td>
          <td>{task.status}{task.status === 'pending' ?
           <div> <button onClick={() => onUpdateStatusClick(task.id, 'completed')}>Task Completed</button>  <button onClick={() => onUpdateStatusClick(task.id, 'failed')}>Task Failed</button> </div> : null}</td>
          <td>{task.description}</td>
          <td>{task.startedAt}</td>
          <td>{task.finishedAt}</td>
          <td>{task.driverComment}</td>
          <td>{task.deliveryDate}</td>
        </tr>
);


export default TaskRow;
