import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

function IssueDetail({ issues, onUpdateIssue }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const issue = issues.find((issue) => issue.id.toString() === id);

  const [newStatus, setNewStatus] = useState(issue ? issue.status : "");
  const [showLocation, setShowLocation] = useState(false);

  if (!issue) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Issue not found</div>
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          Back
        </button>
      </div>
    );
  }

  const handleUpdate = () => {
    alert("Status updated successfully!");
    if (newStatus) {
      onUpdateIssue(issue.id, { ...issue, status: newStatus });
      alert("Status updated successfully!");
    }
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Issue Detail Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`ID: ${issue.id}`, 14, 40);
    doc.text(`Title: ${issue.title}`, 14, 50);
    doc.text(`Description: ${issue.description}`, 14, 60);
    doc.text(`Status: ${newStatus}`, 14, 70);
    doc.text(`Priority: ${issue.priority}`, 14, 80);

    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${issue.lat},${issue.lng}`;

    // Set blue color for location text
    doc.setTextColor(0, 102, 204); // RGB blue
    doc.textWithLink(
      `📍 Location: ${issue.location}`,
      14,
      90,
      { url: mapsLink }
    );

    // Reset color to black for the rest
    doc.setTextColor(0, 0, 0);
    doc.text(`Reporter: ${issue.reporter}`, 14, 100);
    doc.text(`Date Reported: ${issue.dateReported}`, 14, 110);

    doc.save(`Issue-${issue.id}-Report.pdf`);
  };


  return (
    <div className="issue-detail d-flex justify-content-center">
      <div
        className="image-inside"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${issue.image})`,
        }}
      ></div>
      <div className="full-card my-4">
        <div className="card shadow-sm">
          <div className="card-header">
            <h2 className="h5 my-1">Issue Detail (ID: {issue.id})</h2>
          </div>
          <div className="card-body my-0">
            <p className="mt-0"><strong>Title:</strong> {issue.title}</p>
            <img src={issue.image} alt={issue.title} className="rounded" />
            <p className="mt-1"><strong><i class="bi bi-file-earmark-text-fill"></i>Description:</strong> {issue.description}</p>

            {/* Editable Status */}
            <p>
              <strong>Status:</strong>
              <select
                className="form-select d-inline-block w-auto ms-2"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </p>

            <p>
              <strong>Priority:</strong>
              <span className="badge bg-danger ms-2">{issue.priority}</span>
            </p>

            <p>
              <strong><i class="bi bi-geo-alt-fill"></i>Location:</strong> {issue.location}
              <button
                className="btn btn-border btn-sm ms-2"
                onClick={() => setShowLocation(true)}
              ><img src="/map.png" style={{ width: "30px" }} alt="map" className="me-1" />
                View Location
              </button>
            </p>

            <p><strong><i class="bi bi-person-fill"></i>Reporter:</strong> {issue.reporter}</p>
            <p><strong><i class="bi bi-clock-fill"></i>Date Reported:</strong> {issue.dateReported}</p>

          </div>
          <div className="card-footer text-end">
            <button onClick={handleDownloadReport} className="btn btn-primary me-3">
              Download Report
            </button>
            <button onClick={handleUpdate} className="btn btn-success me-3">
              Save Status
            </button>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
              Back
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Location Modal */}
      {showLocation && (
        <div className="container-fluid modal d-block   hole-map" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Issue Location</h5>
                <button
                  type="button"
                  className="btn btn-close close"
                  onClick={() => setShowLocation(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Address:</strong> {issue.location}</p>
                {/* If you store lat/lng, show Google Maps */}
                {issue.lat && issue.lng && (
                  <iframe
                    title="map"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps?q=${issue.lat},${issue.lng}&hl=es;z=14&output=embed`}
                  ></iframe>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setShowLocation(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IssueDetail;