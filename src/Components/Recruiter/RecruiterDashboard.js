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
        {
          name: "Liam Brown",
          job: "DevOps Engineer",
          experience: "8 years",
          education: "Bachelor's in Software Engineering",
          personalWebsite: "https://liambrown.dev",
          bio: "DevOps expert skilled in cloud infrastructure and CI/CD pipelines.",
          email: "liambrown@example.com",
          dob: "1987-12-14",
          nationality: "British",
          gender: "Male",
          address: "25 Green Road, London, UK",
          phone: "+44-20-1234-5678",
          logo: "https://via.placeholder.com/100/1282A2/FFFFFF?text=TechCorp",
          resumeName: "LiamB_DevOps.pdf",
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
        {
          name: "Liam Brown",
          job: "DevOps Engineer",
          experience: "8 years",
          education: "Bachelor's in Software Engineering",
          personalWebsite: "https://liambrown.dev",
          bio: "DevOps expert skilled in cloud infrastructure and CI/CD pipelines.",
          email: "liambrown@example.com",
          dob: "1987-12-14",
          nationality: "British",
          gender: "Male",
          address: "25 Green Road, London, UK",
          phone: "+44-20-1234-5678",
          logo: "https://via.placeholder.com/100/1282A2/FFFFFF?text=TechCorp",
          resumeName: "LiamB_DevOps.pdf",
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
        {
          name: "Liam Brown",
          job: "DevOps Engineer",
          experience: "8 years",
          education: "Bachelor's in Software Engineering",
          personalWebsite: "https://liambrown.dev",
          bio: "DevOps expert skilled in cloud infrastructure and CI/CD pipelines.",
          email: "liambrown@example.com",
          dob: "1987-12-14",
          nationality: "British",
          gender: "Male",
          address: "25 Green Road, London, UK",
          phone: "+44-20-1234-5678",
          logo: "https://via.placeholder.com/100/1282A2/FFFFFF?text=TechCorp",
          resumeName: "LiamB_DevOps.pdf",
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
        {
          name: "Liam Brown",
          job: "DevOps Engineer",
          experience: "8 years",
          education: "Bachelor's in Software Engineering",
          personalWebsite: "https://liambrown.dev",
          bio: "DevOps expert skilled in cloud infrastructure and CI/CD pipelines.",
          email: "liambrown@example.com",
          dob: "1987-12-14",
          nationality: "British",
          gender: "Male",
          address: "25 Green Road, London, UK",
          phone: "+44-20-1234-5678",
          logo: "https://via.placeholder.com/100/1282A2/FFFFFF?text=TechCorp",
          resumeName: "LiamB_DevOps.pdf",
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

      applicants: [
        {
          name: "Liam Brown",
          job: "DevOps Engineer",
          experience: "8 years",
          education: "Bachelor's in Software Engineering",
          personalWebsite: "https://liambrown.dev",
          bio: "DevOps expert skilled in cloud infrastructure and CI/CD pipelines.",
          email: "liambrown@example.com",
          dob: "1987-12-14",
          nationality: "British",
          gender: "Male",
          address: "25 Green Road, London, UK",
          phone: "+44-20-1234-5678",
          logo: "https://via.placeholder.com/100/1282A2/FFFFFF?text=TechCorp",
          resumeName: "LiamB_DevOps.pdf",
        },
      ],
    },
  ];

  return (
    // <div className="recr_dashboard-container">
    <div className="recr_main-content">
      {/* <Header /> */}
      <div className="recr_overview">
        <p className="recr_overview_greeting">Hello, !</p>
        {/* {dashboardData.user?.name || "User"} */}
        <p className="recr_overview_greeting_sub">
          Here is your daily activities and applications
        </p>
        <div className="recr_stats">
          <div className="recr_stat-1">
            <div>
              <h3 className="recr_dashboard-h3">589</h3>
              <span>Open Jobs</span>
            </div>
            <p className="recr_stat_icon">👜</p>
          </div>
          <div className="recr_stat-2">
            <div>
              <h3 className="recr_dashboard-h3">2,517</h3>
              <span>Saved Candidates</span>
            </div>
            <p className="recr_stat_icon">📟</p>
          </div>
        </div>
      </div>
      <div className="recr_jobs">
        <div
          style={{
            display: "flex",
            width: "89%",
            justifyContent: "space-between",
          }}
        >
          <h3
            className="recr_dashboard-h3"
            style={{ fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Recent Posted Jobs
          </h3>
          <button
            className="recr_"
            style={{}}
            // onClick={() => setActiveMenu("Applied Jobs")}
          >
            View All <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <table className="recr_jobs-table">
          {/* <thead>
            <tr className="recr_jobs-table-titles">
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
