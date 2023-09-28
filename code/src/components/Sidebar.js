import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faNewspaper,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar-box">
      <NavLink className="NavLink" to="/" exact>
        <div className="nav-btn fs-18 ">
          <FontAwesomeIcon className="fs-15" icon={faHouse} />
          <span className="menu-items">Home</span>
        </div>
      </NavLink>

      <NavLink className="NavLink" to="/articles">
        <div className="nav-btn fs-18 ">
          <FontAwesomeIcon className="fs-15" icon={faNewspaper} />
          <span className="menu-items">Articles</span>
        </div>
      </NavLink>

      <NavLink className="NavLink" to="/help">
        <div className="nav-btn fs-18">
          <FontAwesomeIcon className="fs-15" icon={faCircleInfo} />
          <span className="menu-items">Help</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Sidebar;
