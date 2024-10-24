import React from 'react';
// import './Modal.css';

const Modal = ({ toggleModal }) => {
  return (
    <div className="modal-background" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Event Details</h2>
        <p>Here are the details of the event you clicked on.</p>
        <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
