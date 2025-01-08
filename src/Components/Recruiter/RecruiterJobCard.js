import React, { useState } from "react";
import "./RecruiterJobCard.css";
import Modal from "../../ModalComponent/Modal";
import { useNavigate } from "react-router-dom";

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
  const [isNewPage, setIsNewPage] = useState(false);

  const navigate = useNavigate();

  const handleViewApplicants = () => {
    setIsModalOpen(true);
  };

  // const =()=>{
  //    navigate("/viewprofile")

  // }

  const handleViewProfile = (applicants) => {
    navigate(`/viewprofile/`, {
      state: {
        applicants,
      },
    });
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
          <div className="recr_Employe-job-details">
            <p className="recr_Employe_job_title">{jobTitle}</p>
            <span className="recr_Employe_job_dur">
              {type} • {daysRemaining}
            </span>
          </div>
        </td>

        {/* Job Status */}
        <td className={`recr_status ${expired ? "expired" : "active"}`}>
          {status}
        </td>

        {/* Applications Count */}
        <td>{applications} Applications</td>

        {/* Actions */}
        <td>
          <div className="recr_more-options">
            <button
              className="recr_view-applications"
              onClick={handleViewApplicants}
            >
              View Applicants
            </button>

            {/* Menu Button */}
            {/* <button className="recr_menu-button" onClick={toggleDropdown}>
            ⋮
          </button> */}

            {/* Dropdown Menu */}
            {/* {isDropdownVisible && (
            <div className="recr_dropdown">
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
                  <button onClick={() => handleViewProfile(applicants)}>
                    View Profile
                  </button>
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
