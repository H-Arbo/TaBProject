import React from "react";
import { Link } from 'react-router-dom';
import '../components/Info.css';

const Info = () => {
  return (
    <div className="info-menu">
      <ul>
        <li>
          <button><Link to="/aboutUs">About Us</Link></button>
        </li>
        <li>
         <button><Link to="/resources">Resources</Link></button>
        </li>
      </ul>
    </div>
  );
};

export default Info;
