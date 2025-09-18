import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAdminInfo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [department, setDepartment] = useState("");

  const states = ["Tamil Nadu", "Kerala", "Karnataka"];

  const districts =
    state === "Tamil Nadu"
      ? ["Chennai", "Tiruvarur"]
      : state === "Kerala"
        ? ["Kochi", "Trivandrum"]
        : state === "Karnataka"
          ? ["Bangalore", "Mysore"]
          : [];

  // ✅ Departments dropdown
  const departments = [
    "Municipal Corporation",
    "Electricity Board (EB)",
    "Water Supply & Sewerage Board",
    "Public Works Department (PWD)",
    "Transport Department",
    "Education Department",
    "Fire & Emergency Services",
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password && state && district && department) {
      // send all info to Dashboard
      setAdminInfo({ username, state, district, department });
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
      </div>
      <div className="form-full">
        <div className="form-body">
          <form
            onSubmit={handleSubmit}
            className="p-4 shadow-sm border rounded w-40"
          >
            {/* Title */}
            <h1 className="text-center mb-4">Admin Login Page</h1>

            {/* Username */}
            <div className="mb-2">
              <label className="form-label">
                <i className="bi bi-person-fill"></i> Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-2">
              <label className="form-label">
                <i className="bi bi-lock-fill"></i> Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* State */}
            <div className="mb-2">
              <label className="form-label">State</label>
              <select
                className="form-select"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">Select State</option>
                {states.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="mb-2">
              <label className="form-label">District</label>
              <select
                className="form-select"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                disabled={!state}
              >
                <option value="">Select District</option>
                {districts.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>

            {/* Department */}
            <div className="mb-3">
              <label className="form-label">Department</label>
              <select
                className="form-select"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
