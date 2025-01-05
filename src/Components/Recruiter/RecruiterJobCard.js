import React, { useState } from "react";
import "./RecruiterJobCard.css";
import Modal from "../../ModalComponent/Modal";


const RecruiterJobCard = ({
  jobTitle,
  type,
  status,
  applications,
  daysRemaining,
  expired,
  applicants,
  // array of candidates
}) => {
  // State for dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const handleViewApplicants = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <tr>
        {/* Job Details */}
        <td>
          <div className="Employe-job-details">
            <p className="Employe_job_title">{jobTitle}</p>
            <span className="Employe_job_dur">
              {type} • {daysRemaining}
            </span>
          </div>
        </td>

        {/* Job Status */}
        <td className={`status ${expired ? "expired" : "active"}`}>{status}</td>

        {/* Applications Count */}
        <td>{applications} Applications</td>

        {/* Actions */}
        <td>
          <div className="more-options">
            <button className="view-applications" onClick={handleViewApplicants}>View Applicants</button>

            {/* Menu Button */}
            {/* <button className="menu-button" onClick={toggleDropdown}>
            ⋮
          </button> */}

            {/* Dropdown Menu */}
            {/* {isDropdownVisible && (
            <div className="dropdown">
              <button>Send Email</button>
              <button>Download CV</button>
            </div>
          )} */}
          </div>
        </td>
      </tr>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Applicants for {jobTitle}</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Experience</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.name}</td>
                <td>{applicant.experience}</td>
                <td>{applicant.job}</td>
                <td>
                  <button>View Profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </>
  );
};

export default RecruiterJobCard;
