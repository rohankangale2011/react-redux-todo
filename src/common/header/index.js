import React from "react";
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="title">React redux</div>
      <ul>
        <li>
          <Link to="/">ToDo</Link>
        </li>
        <li>
          <Link to="/other">Other</Link>
        </li>
      </ul>
    </div>
  );
};


export default Header;
