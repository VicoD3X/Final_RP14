import React from 'react';
import './Popup.css';  

const Popup = ({ isOpen, close, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={close}>×</button>
        <div className="content">
          {content}  
        </div>
      </div>
    </div>
  );
};

export default Popup;
