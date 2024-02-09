import React from 'react';
import './Button.css';

const Button = ({ children, onClick, color }) => {
  return (
    <button className={`rounded-button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
