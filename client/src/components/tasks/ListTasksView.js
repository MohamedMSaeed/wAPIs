import React from 'react';
import './ListTasksView.css';
import TaskRow from './TaskRow';
import Pagination from '../common/Pagination';
const ListTasksView = ({ tasks, totalCount, onSortClick, onUpdateStatusClick }) => (
    <div>
    <table>
        <tbody>
            <tr>
                <th><a href="#" className="sort-by" onClick={() => onSortClick('courier')}>Courier</a></th>
                <th>Driver Name</th>
                <th><a href="#" className="sort-by" onClick={() => onSortClick('status')}>Task Status</a></th>
                <th>Task Description</th>
                <th><a href="#" className="sort-by" onClick={() => onSortClick('startedAt')}>Task Started Date</a></th>
                <th>Task Finished Date</th>
                <th>Driver Comment</th>
                <th><a href="#" className="sort-by" onClick={() => onSortClick('deliveryDate')}>Delivery Date</a></th>
            </tr>
            {tasks.map(task => <TaskRow key={task.id} task={task} onUpdateStatusClick={onUpdateStatusClick}/>)}
        </tbody>
    </table>
    <Pagination total={totalCount} />
    </div>
);


export default ListTasksView;
