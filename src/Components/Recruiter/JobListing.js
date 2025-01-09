import React from "react";
import EmployeJobCard from "./RecruiterJobCard";
import "./RecruiterDashboard.css";

const JobListing = ({ jobs }) => {
  // Static data to be displayed when no dynamic data is present
  const staticJobs = [
    {
      title: "UI/UX Designer",
      type: "Full Time",
      status: "Active",
      applications: 798,
      days: "27 days remaining",
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

  // Use staticJobs if jobs array is empty or undefined
  const dataToDisplay = jobs && jobs.length > 0 ? jobs : staticJobs;

  return (
    <div className="recr_main-content">
      <div className="recr_jobs">
        <h3 className style={{ marginBottom: "10px", fontSize: "1.3rem" }}>
          Posted Jobs
        </h3>
        <table className="recr_jobs-table">
          <thead>
            <tr className="recr_jobs-table-titles">
              <th>Jobs</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((job, index) => (
              <EmployeJobCard
                key={index}
                jobTitle={job.jobTitle || job.title}
                type={job.jobType || job.type}
                status={job.status || "Active"}
                applications={job.applications || 0}
                daysRemaining={job.days || "N/A"}
                expired={job.expired || false}
                applicants={job.applicants}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobListing;
