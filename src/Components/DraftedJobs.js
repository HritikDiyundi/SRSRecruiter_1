import React, { useState } from "react";
import "./DraftedJobs.css";
import { useNavigate } from "react-router-dom";
const draftJobsData = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    tags: "React, JavaScript, HTML",
    jobRole: "developer",
    salary: "30000 - 50000 USD (Monthly)",
    vacancies: 2,
    jobLevel: "Mid Level",
    expirationDate: "2025-01-15",
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    tags: "Figma, AdobeXD, Prototyping",
    jobRole: "designer",
    salary: "40000 - 60000 USD (Monthly)",
    vacancies: 1,
    jobLevel: "Entry Level",
    expirationDate: "2025-02-01",
  },
];

const DraftedJobs = () => {
  const navigate = useNavigate();
  const [draftJobs, setDraftJobs] = useState(draftJobsData);

  const handleEdit = (job) => {
    console.log(job)
    // Redirect to Job Post page with pre-filled data
    navigate("/job-post", { state: { job } });
  };

  // const handlePostJob = (id) => {
  //   alert(`Job with ID ${id} has been posted!`);
  //   setDraftJobs(draftJobs.filter((job) => job.id !== id));
  // };

  const handleDelete = (id) => {
    setDraftJobs(draftJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="Recrdraft-jobs-container">
      <h2 className="Recrheader">Drafted Jobs</h2>
      <div className="Recrdraft-jobs-list">
        {draftJobs.map((job) => (
          <div key={job.id} className="Recrdraft-job-card">
            <h3 className="Recrjob-title" >{job.jobTitle}</h3>
            <p className="Recrtags"style={{marginTop:"20px"}}>Tags: {job.tags}</p>
            <p className="Recrsalary">Salary: {job.salary}</p>
            <p className="Recrjob-level">Job Level: {job.jobLevel}</p>
            <p className="Recrexpiration">Expires On: {job.expirationDate}</p>
            <div className="Recrjob-actions">
              <button
                className="Recredit-btn"
                onClick={() => handleEdit(job)}
              >
                Edit
              </button>
              {/* <button
                className="Recrpost-btn"
                onClick={() => handlePostJob(job.id)}
              >
                Post Job
              </button> */}
              <button
                className="Recrdelete-btn"
                onClick={() => handleDelete(job.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraftedJobs;
