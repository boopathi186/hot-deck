import React from 'react';
import '../../css/Sidebar.css';
import hotdeck from '../../assets/Frame 629075.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-white h-100 vh-100 m-0 p-0 shadow">
      <div className="text-center  bg-white  py-4">
        <img className="mt-3  bg-white " src={hotdeck} alt='hotdeck_image' />
      </div>
      <div className="nav flex-column bg-white ">
        <Link className="navbars nav-link text-danger fw-semibold d-flex align-items-center " to='/dashboard'>
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </Link>
        <Link className="navbars nav-link mt-4 text-secondary text-opacity-50 fw-semibold d-flex align-items-center" to='/theme'>
          <i className="bi bi-journals me-2"></i> Themes
        </Link>
        <div className="navbars nav-link mt-4 text-secondary text-opacity-50 fw-semibold d-flex align-items-center">
          <i className="bi bi-card-text me-2"></i> Decks
        </div>
        <div className="navbars nav-link mt-4 text-secondary text-opacity-50 fw-semibold d-flex align-items-center">
          <i className="bi bi-question-circle-fill me-2"></i> Challenges
        </div>
        <div className="navbars nav-link mt-4 text-secondary text-opacity-50 fw-semibold d-flex align-items-center">
          <i className="bi bi-people-fill me-2"></i> Customers
        </div>
        <div className="navbars nav-link mt-4 text-secondary text-opacity-50 fw-semibold d-flex align-items-center">
          <i className="bi bi-sliders me-2"></i> Admin User Management
        </div>
        <div className="navbars nav-link mt-4 text-secondary text-opacity-50 fw-semibold d-flex align-items-center">
          <i className="bi bi-file-earmark-text-fill me-2"></i> Roles and Permissions
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
