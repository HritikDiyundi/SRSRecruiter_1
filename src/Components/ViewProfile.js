import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBriefcaseClock,
  faCalendar,
  faCheck,
  faClock,
  faDoorOpen,
  faLocation,
  faLocationDot,
  faMap,
  faStar,
  faUser,
  faWallet,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLink,
  faPhone,
  faEnvelope,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import { useLocation, useNavigate } from "react-router-dom";
import "./ViewProfile.css";
import Header from "./Header";
import {
  faFacebook,
  faFirefoxBrowser,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const JobDetails = () => {
  // const jobId = parseInt(id);
  const location = useLocation();
  const navigate = useNavigate();
  const applicants = location.state?.applicants;
  const isDefaultSelected=location.state?.defaultSelected;

  const [saved, setSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleSave = () => {
    setSaved((prevSaved) => !prevSaved);
  };
  const handleApplyClick = () => {
    setIsApplied(true);
  };

  const handleViewResume = () => {
    // Logic to view the resume
    console.log("View Resume clicked");
    // Open resume URL or show the resume in a modal
  };

  return (
    <div className="Recrlast-job-details-container">
      <Header />

      {/* Back Button */}

      {/* Job Details Section */}

      <div className="Recrlast-job-content">
        <div className="Recrlast-back-btn-container">
          <button onClick={() => navigate(-1)} className="Recrlast-back-btn">
            <FontAwesomeIcon icon={faXmarkCircle} className="Recrlastbackbtn" />
          </button>
        </div>
        <div className="Recrlastlastlast">
          <div className="Recrlast-job-row">
            {/* Left Section */}
            <div className="Recrlast-job-left">
              {console.log(applicants)}
              <img
                src={applicants[0].logo}
                // alt={`${applicants[0].companyName} logo`}
                className="Recrlast-company-logo"
              />
              <div className="Recrlast-last-job">
                <div className="Recrlast-job">
                  {/* <div className="Recrlast-job-type"></div> */}
                  <h2 className="Recrlast-job-role">{applicants[0].name}</h2>
                  {/* <p className="Recrlast-job-type">{applicants.employmentType}</p> */}
                </div>

                <div className="Recrlast-job-contact">
                  <div className="Recrlast-job-contact-alignment">
                    <div className="Recrlast-job-align">
                      <strong>
                        {/* <FontAwesomeIcon icon={faPhone} /> */}
                      </strong>
                      {applicants[0].job || "Not available"}
                    </div>

                    {/* <br /> */}
                    {/* <div className="Recrlast-job-align">
                      <strong>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </strong>
                      {applicants.email || "Not available"}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="Recrlast-resume-list">
              <button
                className="Recrlast-job-align-border"
                onClick={handleSave}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: saved ? "#1282A2" : "#c5c1c1" }} // Change icon color based on saved state
                />
                {/* {saved ? "Saved" : "Save"} */}
              </button>

              <div className="Recrlast-job-align-border">
                <strong>
                  <FontAwesomeIcon icon={faEnvelope} />
                </strong>
                Send Email
              </div>

              <div className="Recrlast-job-align-border">
                <strong>
                  <FontAwesomeIcon icon={faCheck} />
                </strong>
                {/* Select Candidate */}
                {isDefaultSelected ? (
                  <span>Select Candidates</span>
                ) :(
                  <span>Schedule Interview</span>
                
                )}
              </div>
            </div>
          </div>
          {/* Job Description Section */}
          <div className="Recrlast">
            <div className="Recrlast-job-description-container">
              <div className="Recrlast-job-description">
                <h3>Bio</h3>
                <p>{applicants[0].bio}</p>
              </div>

              <div className="Recrresume-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="Recrresume-icon">📄</span>
                  <div className="Recrresume-details">
                    {console.log(applicants.resumeName)}
                    <p>{applicants[0].resumeName}</p>{" "}
                    {/* Replace "Resume Title" with the actual resume title if available */}
                  </div>
                </div>
                <div
                  className="Recrresume-menu"
                  onClick={() => handleViewResume()}
                >
                  <i className="Recrresume-view-icon">👁‍🗨</i> {/* View Icon */}
                </div>
              </div>

              {/* Share this job section */}
              <div className="Recrjob-share-section">
                <p className="Recrshare-text">Share this job</p>
                <div className="Recrshare-icons">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://your-job-url.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="Recrshare-icon facebook"
                    />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://your-job-url.com&text=Check%20out%20this%20job!`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="Recrshare-icon twitter"
                    />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=https://your-job-url.com&title=Check%20out%20this%20job`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="Recrshare-icon linkedin"
                    />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=Check%20out%20this%20job:%20https://your-job-url.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="Recrshare-icon whatsapp"
                    />
                  </a>
                  <a
                    href={`mailto:?subject=Check out This job&body=Here is the job link: https://your-job-url.com`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="Recrshare-icon email"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Container Section */}
            <div className="Recrlast-job-overview-container">
              <div className="Recrlast-job-overview">
                {/* <h3>Job Overview</h3> */}
                <div className="Recrlast-job-row-align">
                  <div className="Recrlast-job-detail-item">
                    <div className="Recrlast-jobdetail-align">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="Recrcustomclr"
                      />
                      <h className="Recrlast-jobhead">Date Of birth:</h>
                      <strong>{applicants[0].dob}</strong>
                    </div>
                  </div>
                  <div className="Recrlast-job-detail-item">
                    <div className="Recrlast-jobdetail-align">
                      <FontAwesomeIcon icon={faMap} className="Recrcustomclr" />
                      <h className="Recrlast-jobhead">Nationality:</h>
                      <strong>{applicants[0].nationality}</strong>
                    </div>
                  </div>
                </div>

                <div className="Recrlast-job-row-align">
                  <div className="Recrlast-job-detail-item">
                    <div className="Recrlast-jobdetail-align">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="Recrcustomclr"
                      />
                      <h className="Recrlast-jobhead">Experience:</h>
                      <strong>{applicants[0].experience}</strong>
                    </div>
                  </div>
                  <div className="Recrlast-job-detail-item">
                    <div className="Recrlast-jobdetail-align">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="Recrcustomclr"
                      />
                      <h className="Recrlast-jobhead">Gender:</h>
                      <strong>{applicants[0].gender}</strong>
                    </div>
                  </div>
                </div>

                <br></br>
                <div className="Recrlast-job-detail-item">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="Recrcustomclr"
                  />
                  <br></br>
                  <strong>Education:</strong> {applicants[0].education}
                </div>
              </div>
            </div>
          </div>
          <div className="Recrlast-job-overview-container-right">
            <div className="Recrlast-job-overview-container-right-right">
              <div className="Recrlast-job-overview">
                {/* <h3>Job Overview</h3> */}
                <div className="Recrlast-job-row-align-right">
                  <div className="Recrlast-job-detail-item-right">
                    <div className="Recrlast-job-detail-item-align-right">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="Recrcustomclr"
                      />
                      <div className="Recr-inside-align">
                        <h className="Recrlast-jobhead">Address</h>
                        <strong>{applicants[0].address}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="Recrlast-job-detail-item-right">
                    <div className="Recrlast-job-detail-item-align-right">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="Recrcustomclr"
                      />
                      <div className="Recr-inside-align">
                        <h className="Recrlast-jobhead">Phone</h>
                        <strong>{applicants[0].phone}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="Recrlast-job-detail-item-right">
                    <div className="Recrlast-job-detail-item-align-right">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="Recrcustomclr"
                      />
                      <div className="Recr-inside-align">
                        <h className="Recrlast-jobhead">Email</h>
                        <strong>{applicants[0].email}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
