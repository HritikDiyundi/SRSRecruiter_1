import React from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../Components/Header";
import RecruiterJobCard from "./RecruiterJobCard";
import "./RecruiterDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RecruiterDashboard = () => {
  const jobs = [
    {
      title: "UI/UX Designer",
      type: "Full Time",
      status: "Active",
      applications: 798,
      days: "27 days remaining",
      expired: false,
      applicants: [
        { name: "John Doe", experience: "5 Years", job: "Frontend Developer" },
        { name: "Jane Smith", experience: "3 Years", job: "UI Designer" },
        {
          name: "Michael Brown",
          experience: "2 Years",
          job: "React Developer",
        },
      ],
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      status: "Active",
      applications: 185,
      days: "8 days remaining",
      expired: false,
      applicants: [
        { name: "John Doe", experience: "5 Years", job: "Frontend Developer" },
        { name: "Jane Smith", experience: "3 Years", job: "UI Designer" },
        {
          name: "Michael Brown",
          experience: "2 Years",
          job: "React Developer",
        },
      ],
    },
    {
      title: "Technical Support Specialist",
      type: "Part Time",
      status: "Active",
      applications: 556,
      days: "4 days remaining",
      expired: false,
      applicants: [
        { name: "John Doe", experience: "5 Years", job: "Frontend Developer" },
        { name: "Jane Smith", experience: "3 Years", job: "UI Designer" },
        {
          name: "Michael Brown",
          experience: "2 Years",
          job: "React Developer",
        },
      ],
    },
    {
      title: "Junior Graphic Designer",
      type: "Full Time",
      status: "Active",
      applications: 583,
      days: "24 days remaining",
      expired: false,
      applicants: [
        { name: "John Doe", experience: "5 Years", job: "Frontend Developer" },
        { name: "Jane Smith", experience: "3 Years", job: "UI Designer" },
        {
          name: "Michael Brown",
          experience: "2 Years",
          job: "React Developer",
        },
      ],
    },
    {
      title: "Front End Developer",
      type: "Full Time",
      status: "Expired",
      applications: 740,
      days: "Dec 7, 2019",
      expired: true,
      expired: false,
      applicants: [
        { name: "John Doe", experience: "5 Years", job: "Frontend Developer" },
        { name: "Jane Smith", experience: "3 Years", job: "UI Designer" },
        {
          name: "Michael Brown",
          experience: "2 Years",
          job: "React Developer",
        },
      ],
    },
  ];

  return (
    // <div className="dashboard-container">
    <div className="main-content">
      {/* <Header /> */}
      <div className="overview">
        <p className="overview_greeting">Hello, !</p>
        {/* {dashboardData.user?.name || "User"} */}
        <p className="overview_greeting_sub">
          Here is your daily activities and applications
        </p>
        <div className="stats">
          <div className="stat-1">
            <div>
              <h3>589</h3>
              <span>Open Jobs</span>
            </div>
            <p className="stat_icon">👜</p>
          </div>
          <div className="stat-2">
            <div>
              <h3>2,517</h3>
              <span>Saved Candidates</span>
            </div>
            <p className="stat_icon">📟</p>
          </div>
        </div>
      </div>
      <div className="jobs">
        <div
          style={{
            display: "flex",
            width: "89%",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Recent Posted Jobs</h3>
          <button
            className=""
            style={{}}
            // onClick={() => setActiveMenu("Applied Jobs")}
          >
            View All <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <table className="jobs-table">
          {/* <thead>
            <tr className="jobs-table-titles">
              <th>Jobs</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Actions</th>
            </tr>
          </thead> */}
          <tbody>
            {jobs.map((job, index) => (
              <RecruiterJobCard
                key={index}
                jobTitle={job.title}
                type={job.type}
                status={job.status}
                applications={job.applications}
                daysRemaining={job.days}
                expired={job.expired}
                applicants={job.applicants}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
