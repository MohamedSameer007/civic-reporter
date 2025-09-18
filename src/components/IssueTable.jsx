import React, { useState } from "react";
import { Link } from "react-router-dom";

function IssueTable({ issues }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || issue.status.toLowerCase() === statusFilter;

    const matchesPriority =
      priorityFilter === "all" || issue.priority.toLowerCase() === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const statusBadges = {
    open: "badge bg-danger",
    "in progress": "badge bg-warning text-dark",
    resolved: "badge bg-success",
  };

  const priorityBadges = {
    high: "badge bg-danger",
    medium: "badge bg-warning text-dark",
    low: "badge bg-success",
  };

  return (
    <div className="card shadow-sm issue-table-card">
      <div className="card-body">
        {/* Search + Filters */}
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <input
              type="text"
              placeholder="Search issues..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-3 mb-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="form-select"
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark p-5">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Location</th>
                <th>Reporter</th>
                <th>Priority</th>
                <th>Date Reported</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredIssues.length > 0 ? (
                filteredIssues.map((issue) => (
                  <tr key={issue.id} className="">
                    <td>#{issue.id}</td>
                    <td><strong>{issue.title}</strong></td>
                    <td>{issue.category}</td>
                    <td>
                      <span className={statusBadges[issue.status.toLowerCase()]}>
                        {issue.status}
                      </span>
                    </td>
                    <td>{issue.location}</td>
                    <td>{issue.reporter}</td>
                    <td>
                      <span className={priorityBadges[issue.priority.toLowerCase()]}>
                        {issue.priority}
                      </span>
                    </td>
                    <td>{issue.dateReported}</td>
                    <td>
                      <Link
                        to={`/issue/${issue.id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        <i className="bi bi-eye"></i> View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center text-muted py-3">
                    No issues found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IssueTable;
