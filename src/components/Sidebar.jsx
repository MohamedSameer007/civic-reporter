import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-dark text-white vh-100 p-3" style={{ width: "220px" }}>
      <h5 className="text-center mb-4">Admin Panel</h5>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </Link>
          </li>
          {/* You can add more links here */}
          {/* <li className="nav-item mb-2">
            <Link to="/issues" className="nav-link text-white">
              <i className="bi bi-list-task me-2"></i> Issues
            </Link>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
