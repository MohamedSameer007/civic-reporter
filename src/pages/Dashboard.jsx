// Dashboard.jsx
import React, { useEffect } from "react";
import IssueTable from "../components/IssueTable";
import { useNavigate } from "react-router-dom";

const sampleIssues = [
  {
    id: 1,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Large pothole on Main Street",
    category: "Infrastructure",
    description: "A deep pothole causing heavy traffic and accidents in the area.",
    status: "open",
    location: "123 Main Street",
    lat: 10.7720,
    lng: 79.6368,
    reporter: "Sarah Johnson",
    priority: "high",
    dateReported: "2024-01-15",
    image: "/large-pothole.jpeg"
  },
  {
    id: 2,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Broken streetlight",
    category: "Utilities",
    description: "Streetlight at Central Park entrance is broken, creating safety issues at night.",
    status: "in progress",
    location: "Central Park Main Entrance",
    lat: 13.0827,
    lng: 80.2707,
    reporter: "David Martinez",
    priority: "medium",
    dateReported: "2024-01-20",
    image: "/broken-light.webp"
  },
  {
    id: 3,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Park Bench Vandalism",
    category: "Parks & Recreation",
    description: "Several benches in the downtown park have been vandalized and need repair.",
    status: "resolved",
    location: "Downtown Park",
    lat: 10.7725,
    lng: 79.6372,
    reporter: "Mike Davis",
    priority: "low",
    dateReported: "2024-01-12",
    image: "/park-bench.webp"
  },
  {
    id: 4,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Overflowing garbage bins",
    category: "Sanitation",
    description: "Garbage bins in Marina Beach area are overflowing and need urgent cleaning.",
    status: "open",
    location: "Marina Beach",
    lat: 13.0475,
    lng: 80.2824,
    reporter: "Anita Ramesh",
    priority: "high",
    dateReported: "2024-02-05",
    image: "/garbage.jpeg"
  },
  {
    id: 5,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Leaking water pipe",
    category: "Infrastructure",
    description: "A water pipe near the railway station is leaking heavily, causing waterlogging.",
    status: "in progress",
    location: "Railway Station Road",
    lat: 11.0056,
    lng: 76.9661,
    reporter: "Ravi Kumar",
    priority: "high",
    dateReported: "2024-02-10",
    image: "/pipe.webp"
  },
  {
    id: 6,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Traffic signal not working",
    category: "Transport",
    description: "Traffic signal at Meenakshi Temple junction is not functioning, causing jams.",
    status: "open",
    location: "Meenakshi Temple Junction",
    lat: 9.9195,
    lng: 78.1193,
    reporter: "Priya Singh",
    priority: "medium",
    dateReported: "2024-02-12",
    image: "/trafiic.jpg"
  },
  {
    id: 7,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Flooded street after rain",
    category: "Infrastructure",
    description: "Main Street near the bus stand gets flooded during heavy rains.",
    status: "open",
    location: "Main Street, Salem",
    lat: 11.6643,
    lng: 78.1460,
    reporter: "Karthik S",
    priority: "high",
    dateReported: "2024-02-15",
    image: "/flood.jpg"
  },
  {
    id: 8,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Graffiti on walls",
    category: "Community",
    description: "Walls near Besant Nagar Beach have been vandalized with graffiti.",
    status: "resolved",
    location: "Besant Nagar Beach",
    lat: 13.0006,
    lng: 80.2664,
    reporter: "Sahana R",
    priority: "low",
    dateReported: "2024-02-18",
    image: "/graffiti.webp"
  },
  {
    id: 9,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Fallen tree blocking road",
    category: "Environment",
    description: "A large tree has fallen on Race Course Road and is blocking traffic.",
    status: "in progress",
    location: "Race Course Road",
    lat: 11.0026,
    lng: 76.9639,
    reporter: "Manoj T",
    priority: "high",
    dateReported: "2024-02-20",
    image: "/fallen.webp"
  },
  {
    id: 10,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Illegal parking issue",
    category: "Transport",
    description: "Vehicles are illegally parked near the market area, creating congestion.",
    status: "open",
    location: "Madurai Market",
    lat: 9.9197,
    lng: 78.1194,
    reporter: "Lakshmi V",
    priority: "medium",
    dateReported: "2024-02-22",
    image: "/illegal.png"
  },
  {
    id: 11,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Water stagnation in colony",
    category: "Sanitation",
    description: "Water is stagnating in the Green Park colony, leading to mosquito breeding.",
    status: "in progress",
    location: "Green Park Colony",
    lat: 10.7708,
    lng: 79.6350,
    reporter: "Ajith P",
    priority: "high",
    dateReported: "2024-02-25",
    image: "/stagnation.webp"
  },
  {
    id: 12,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Street potholes near hospital",
    category: "Infrastructure",
    description: "w",
    status: "open",
    location: "Salem General Hospital Road",
    lat: 11.6648,
    lng: 78.1459,
    reporter: "Divya R",
    priority: "high",
    dateReported: "2024-02-27",
    image: "/hospital.jpeg"
  },
  {
    id: 13,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Overflowing storm drain",
    category: "Sanitation",
    description: "Storm drain near T Nagar is overflowing and flooding the street.",
    status: "in progress",
    location: "T Nagar",
    lat: 13.0418,
    lng: 80.2337,
    reporter: "Rahul K",
    priority: "high",
    dateReported: "2024-03-01",
    image: "/drain.jpg"
  },
  {
    id: 14,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Bus stop shelter damaged",
    category: "Transport",
    description: "Bus shelter near City Railway Station is damaged and needs repair.",
    status: "resolved",
    location: "City Railway Station",
    lat: 11.0056,
    lng: 76.9661,
    reporter: "Meena S",
    priority: "medium",
    dateReported: "2024-03-03",
    image: "/bus.jpg"
  },
  {
    id: 15,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Streetlight flickering",
    category: "Utilities",
    description: "Streetlights on Alagar Koil Road are flickering at night, creating danger.",
    status: "open",
    location: "Alagar Koil Road",
    lat: 9.9391,
    lng: 78.1230,
    reporter: "Vikram J",
    priority: "medium",
    dateReported: "2024-03-05",
    image: "/flick1.jpg"
  },
  {
    id: 16,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Children playing near traffic",
    category: "Community",
    description: "Children are playing near the busy highway, posing safety risks.",
    status: "open",
    location: "Highway Road",
    lat: 10.7735,
    lng: 79.6390,
    reporter: "Priya M",
    priority: "high",
    dateReported: "2024-03-07",
    image: "/children.webp"
  },
  {
    id: 17,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Abandoned construction material",
    category: "Infrastructure",
    description: "Construction materials left on the road causing blockage for vehicles.",
    status: "in progress",
    location: "Industrial Area",
    lat: 11.6619,
    lng: 78.1475,
    reporter: "Sundar P",
    priority: "medium",
    dateReported: "2024-03-10",
    image: "/destroy.jpg"
  },
  {
    id: 18,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Damaged footpath",
    category: "Infrastructure",
    description: "Footpath near Park Street is broken, making it hard for pedestrians.",
    status: "open",
    location: "Park Street",
    lat: 13.0822,
    lng: 80.2750,
    reporter: "Ananya K",
    priority: "medium",
    dateReported: "2024-03-12",
    image: "/path1.jpg"
  },
  {
    id: 19,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Noise pollution from factory",
    category: "Environment",
    description: "Noise levels near Industrial Estate exceed safe limits.",
    status: "in progress",
    location: "Industrial Estate",
    lat: 11.0143,
    lng: 76.9720,
    reporter: "Arun M",
    priority: "medium",
    dateReported: "2024-03-15",
    image: "/noise.avif"
  },
  {
    id: 20,
    state: "Tamil Nadu",
    district: "Chennai",
    title: "Water leakage in public park",
    category: "Parks & Recreation",
    description: "Water pipe leaking in Anna Park, causing muddy conditions.",
    status: "resolved",
    location: "Anna Park",
    lat: 9.9245,
    lng: 78.1165,
    reporter: "Rekha P",
    priority: "low",
    dateReported: "2024-03-17",
    image: "/leakage.jpg"
  },
  {
    id: 21,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    title: "Road markings faded",
    category: "Transport",
    description: "Lane markings on Main Street are faded, causing confusion.",
    status: "in progress",
    location: "Main Street",
    lat: 10.7729,
    lng: 79.6365,
    reporter: "Ganesh R",
    priority: "medium",
    dateReported: "2024-03-20",
    image: "/fade.jpg"
  }
];

function Dashboard({ adminInfo, issues, setIssues }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminInfo) {
      navigate("/login"); // Redirect if not logged in
    } else {
      const filtered = sampleIssues.filter(
        (issue) =>
          issue.state === adminInfo.state &&
          issue.district === adminInfo.district
      );
      setIssues(filtered); // update global issues in App.jsx
    }
  }, [adminInfo, navigate, setIssues]);

  // Calculate stats
  const totalIssues = issues.length;
  const openIssues = issues.filter((i) => i.status === "open").length;
  const inProgress = issues.filter((i) => i.status === "in progress").length;
  const highPriority = issues.filter((i) => i.status === "resolved").length;

  return (
    <div className="container-fluid my-4 px-5 full-dashboard">
      <div className="dashboard">
        <h1 className="mb-2">{adminInfo?.department} <br></br> {adminInfo?.district}</h1>
        <p className="text-muted">
          Overview of civic issues in {adminInfo?.district} district
          <label className="form-label">
          </label>

        </p>
        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3 single-box">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h3>{totalIssues}</h3>
                <p className="text-muted">Total Issues</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm border-danger">
              <div className="card-body">
                <h3 className="text-danger">{openIssues}</h3>
                <p className="text-muted">Not Resolved</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm border-warning">
              <div className="card-body">
                <h3 className="text-warning">{inProgress}</h3>
                <p className="text-muted">In Progress</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm border-success">
              <div className="card-body">
                <h3 className="text-success">{highPriority}</h3>
                <p className="text-muted">Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Issue Table */}
      <h4 className="my-3">Issues in {adminInfo?.district} District</h4>
      <IssueTable issues={issues} />
    </div>
  );
}

export default Dashboard;
