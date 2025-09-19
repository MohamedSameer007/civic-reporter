import React from "react";

function LoginForm({
  state,
  district,
  department,
  onStateChange,
  onDistrictChange,
  onDepartmentChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="p-4 shadow-sm border rounded bg-light">
      {/* State Input */}
      <div className="mb-3">
        <label className="form-label">State</label>
        <input
          type="text"
          value={state}
          onChange={onStateChange}
          required
          className="form-control"
          placeholder="Enter your state"
        />
      </div>

      {/* District Input */}
      <div className="mb-3">
        <label className="form-label">District</label>
        <input
          type="text"
          value={district}
          onChange={onDistrictChange}
          required
          className="form-control"
          placeholder="Enter your district"
        />
      </div>

      {/* Department Input */}
      <div className="mb-3">
        <label className="form-label">Department</label>
        <input
          type="text"
          value={department}
          onChange={onDepartmentChange}
          required
          className="form-control"
          placeholder="Enter your department"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
