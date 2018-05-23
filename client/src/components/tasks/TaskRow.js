import React from 'react';
import './ListTasksView.css';

const TaskRow = ({ task }) => (
        <tr className="task">
          <td>{task.courier}</td>
          <td>{task.driverName}</td>
          <td>{task.status}</td>
          <td>{task.description}</td>
          <td>{task.startedAt}</td>
          <td>{task.finishedAt}</td>
          <td>{task.driverComment}</td>
          <td>{task.deliveryDate}</td>
        </tr>
);


export default TaskRow;
