import React, { useState } from "react";
import { Task } from "../interfaces/task";
import { editButton, removeButton } from "../strings";
import CloseButton from 'react-bootstrap/CloseButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ModalComponent from "./ModalComponent";
import { PencilFill} from "react-bootstrap-icons";

interface TaskListProps {
  task: Task;
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}
 
const TaskItem: React.FC<TaskListProps> = ({ task, list, setList }) => {

  const [showModal, setShowModal] = useState<boolean>(false);
 
  // Function to open Modal for Editing
  const handleEdit = () => {
    setShowModal(true); 
  };

  // Function to toggle for checkmarks
  const handleToggleComplete = () => {
    const updatedList = list.map((item) =>
      item.id === task.id ? { ...item, completed: !item.completed } : item
    );

    setList(updatedList);
  };

  // Function to delete a task
  const handleDelete = () => {
    const updatedList = list.filter((item) => item.id !== task.id);
    setList(updatedList);
  };

  return (
    <React.Fragment>
      {showModal && (
        <ModalComponent show={showModal} onHide={() => setShowModal(false)} task={task} list={list} setList={setList}/>
      )}

      <tr>
        {/* Completed Checkbox */}
        <td>
         <input 
           
              type='checkbox'
              checked={task.completed}
              onChange={handleToggleComplete}
          />
        </td>
        {/* Task text */}
        <td className={task.completed ? "strikeText" : "plainText"}>
          {task.text}
        </td>
        {/* Edit Icon */}
        <OverlayTrigger
          placement='left'
          overlay={
            <Tooltip style={{padding:"6px"}}>
              {editButton}
            </Tooltip>
          }
        >
          <td
            className="task-icon"
            id={`editBtn${task.id}`}
            onClick={handleEdit}
          >
           <PencilFill style={{color:"grey", fontSize:"18px", paddingBottom:"1px"}} />
          </td>
        </OverlayTrigger>
     
        {/* Delete Icon */}
        <OverlayTrigger
          placement='right'
          overlay={ 
            <Tooltip style={{padding:"6px"}}>
              {removeButton}
            </Tooltip>
          }
        >
          <td onClick={handleDelete}
          className="task-icon"
          >
            <CloseButton className="deleteIcon" /> 
          </td>
        </OverlayTrigger>
      </tr>
    </React.Fragment>
  );
};

export default TaskItem;
