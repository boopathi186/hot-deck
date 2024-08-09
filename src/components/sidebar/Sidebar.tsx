import React from 'react';
import '../../css/Sidebar.css';
import hotdeck from '../../assets/Frame 629075.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar bg-white h-100 vh-100 m-0 p-0 shadow">
      <div className="text-center bg-white py-4">
        <img className="mt-3 bg-white" src={hotdeck} alt='hotdeck_image' />
      </div>
      <div className="nav flex-column bg-white">
        <NavLink
          className="text-decoration-none navbars nav-link fw-semibold d-flex align-items-center"
          to='/dashboard'
        >
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </NavLink>
        <NavLink
          className="text-decoration-none navbars nav-link mt-4 fw-semibold d-flex align-items-center"
          to='/theme'
        >
          <i className="bi bi-journals me-2"></i> Themes
        </NavLink>
        <NavLink
          className="text-decoration-none navbars nav-link mt-4 fw-semibold d-flex align-items-center"
          to='/decks'
        >
          <i className="bi bi-card-text me-2"></i> Decks
        </NavLink>
        <NavLink
          className="text-decoration-none navbars nav-link mt-4 fw-semibold d-flex align-items-center"
          to='/challenges'
        >
          <i className="bi bi-question-circle-fill me-2"></i> Challenges
        </NavLink>
        <NavLink
          className="text-decoration-none navbars nav-link mt-4 fw-semibold d-flex align-items-center"
          to='/customers'
        >
          <i className="bi bi-people-fill me-2"></i> Customers
        </NavLink>
        <NavLink
          className="text-decoration-none navbars nav-link mt-4 fw-semibold d-flex align-items-center"
          to='/usermanagement'
        >
          <i className="bi bi-sliders me-2"></i> Admin Management
        </NavLink>
        <NavLink
          className="text-decoration-none navbars nav-link mt-4 fw-semibold d-flex align-items-center"
          to='/roles'
        >
          <i className="bi bi-file-earmark-text-fill me-2"></i> Roles and Permissions
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
