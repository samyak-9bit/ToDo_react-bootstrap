import React, { useState } from 'react';
import { InputGroup, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Task } from '../interfaces/task';

interface ModalComponentProps {
  show: boolean;
  onHide: () => void;
  task: Task;
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ show, onHide, task, list, setList}) => {

    const[taskToEdit,setTaskToEdit]=useState<string>(task.text);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskToEdit(e.target.value);
      };

      // Function To Edit the task
    const editTask=()=>{
        if (taskToEdit !== null) {
              const updatedList = list.map((item) =>
                item.id === task.id ? { ...item, text: taskToEdit } : item
              );
        
              setList(updatedList);
            }
            onHide();
    }
  return (
    <div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}  
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
           You can Edit your task Here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <InputGroup onChange={handleInputChange}>
         <Form.Control
         value={taskToEdit}
         onChange={handleInputChange}
         />
    
         </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={editTask}>Save Changes</button>
          <button onClick={onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
