import React from 'react';
import { Task } from '../interfaces/task';
import TaskItem from './TaskItem';


interface TaskListProps {
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ list,setList  }) => {
  return (
    <table id="taskList">
      <tbody>
        {/* Display all tasks from list */}
        {list.map((item) => (
          <TaskItem key={item.id} task={item} list={list} setList={setList}/>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
