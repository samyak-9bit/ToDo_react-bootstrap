import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addTask, emptyTaskMessage, taskAddedMessage } from '../strings';
import { Task } from '../interfaces/task';
import ToastComponent from './ToastComponent';



interface AddTaskProps {
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: React.FC<AddTaskProps> = ({ list, setList }) => {
  const [task, setTask] = useState<string>("");
  const [showErrorToast, setshowErrorToast] = useState<boolean>(false);
  const [showSuccessToast, setshowSuccessToast] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  // function to add a new task to the list
  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setList((prevList) => [...prevList, newTask]);
      setTask("");
      setshowSuccessToast(true)
    } else {
      
      // Show the toast when attempting to add an empty task
      setshowErrorToast(true);
    }
  };

  return (
    <div>
      <div className='buttonIn'>
      <input className="inputText"
          id="task"
          placeholder="Add your Task"
          value={task}
          onChange={handleInputChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          className="add-btn"
          onClick={handleAddTask}
        >
          {addTask}
        </Button>
        </div>

      {/* Conditionally render the ToastComponent */}
      {showErrorToast && (
        <ToastComponent text={emptyTaskMessage} variant='danger' show={showErrorToast} setShow={()=>{setshowErrorToast(false)}} ></ToastComponent>
      )}
      {showSuccessToast && (
        <ToastComponent text={taskAddedMessage} variant='success' show={showSuccessToast} setShow={()=>{setshowSuccessToast(false)}} ></ToastComponent>
      )}
    </div>
  );
};

export default AddTask;
