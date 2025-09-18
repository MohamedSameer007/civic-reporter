import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ adminInfo, setAdminInfo }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAdminInfo(null);
    navigate("/login");
  };

  return (
    <header className="header d-flex justify-content-between align-items-center bg-light shadow-sm">
      <h1 className="h4 m-0"><img src="logo.png" />Civic Issue Admin Portal</h1>
      {adminInfo && (
        <div className="d-flex align-items-center gap-3">
          <span className="fw-bold">
            {adminInfo.state} - {adminInfo.district}
          </span>
          <button onClick={handleLogout} className="btn btn-sm btn-danger">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
