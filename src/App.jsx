import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import IssueDetail from "./pages/IssueDetail";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [adminInfo, setAdminInfo] = useState(null);
  const [issues, setIssues] = useState([]); // keep issues at top level

  return (
    <Router>
      <Header adminInfo={adminInfo} setAdminInfo={setAdminInfo} />
      <div className="layout d-flex">
        <div className="content flex-grow-1">
          <Routes>
            <Route
              path="/login"
              element={<Login setAdminInfo={setAdminInfo} />}
            />
            <Route
              path="/"
              element={<Dashboard adminInfo={adminInfo} issues={issues} setIssues={setIssues} />}
            />
            <Route
              path="/issue/:id"
              element={<IssueDetail issues={issues} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
