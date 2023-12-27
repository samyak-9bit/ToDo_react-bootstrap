import React from 'react';
import { Toast, ToastBody } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToastContainer from 'react-bootstrap/ToastContainer';


interface ToastComponentProps {
  variant: string;
  text: string;
  show: boolean,
  setShow: ()=> void
}

const ToastComponent: React.FC<ToastComponentProps> = ({ variant, text, show, setShow }) => {
  return (
    
    <Row>
      <Col>
      <ToastContainer position='top-center'>
      <Toast bg={variant} onClose={() => setShow()} show={show} delay={2500} autohide>     
        <ToastBody style={{color:"white"}}>
          {text}
        </ToastBody>
      </Toast>
      </ToastContainer>
      </Col>
  </Row>
 
  );
};

export default ToastComponent;
