import React, { useState } from "react";
import "../Recruiter/RecruiterSetting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faUpload, faLink } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core";

const RecruiterSetting = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Github", link: "" },
    { platform: "Twitter", link: "" },
    { platform: "LinkedIn", link: "" },
    { platform: "Instagram", link: "" },
  ]);
  // const [activeResumeMenu, setActiveResumeMenu] = useState(null);
  //   const [showUploadResumeModal, setShowUploadResumeModal] = useState(false);
  //   const [resumeName, setResumeName] = useState("");
  //   const [uploadedFile, setUploadedFile] = useState(null);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  // const [activeTab, setActiveTab] = useState("Personal");
  // const [activeResumeMenu, setActiveResumeMenu] = useState(null);

  const [showAccountEdit, setShowAccountEdit] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const maxResumes = 3;

  const dashboardData = {
    user: {
      name: "Luis",
      email: "luis@example.com",
    },

    profile: {
      fullName: "John Doe",
      role: "Senior Developer",
      experience: "5-10 years",
      education: "Master's in Computer Science",
      personalWebsite: "https://johndoe.dev",
    },
    resumeData: [
      {
        id: 1,
        title: "Senior Developer Resume",
        fileUrl: "https://example.com/resumes/senior-developer.pdf",
        uploadedDate: "2024-12-10",
      },
      {
        id: 2,
        title: "Frontend Developer Resume",
        fileUrl: "https://example.com/resumes/frontend-developer.pdf",
        uploadedDate: "2024-12-05",
      },
    ],
  };

  const platformIcons = {
    Github: faGithub,
    Twitter: faTwitterSquare,
    LinkedIn: faLinkedin,
    Instagram: faInstagram,
    default: faLink,
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        alert("Please upload a valid PNG or JPEG image.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB.");
        return;
      }
      console.log("Uploaded file:", file);
    }
  };

  const handleAddNewLink = () => {
    setSocialLinks([...socialLinks, { platform: "", link: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  const handleInputChange = (index, field, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = value;
    setSocialLinks(updatedLinks);
  };

  const renderSettingsContent = () => {
    // console.log("active", activeTab);
    switch (activeTab) {
      case "Personal":
        return (
          <div>
            <div className="recr_personal-section">
              <h2>Basic Information</h2>

              <div className="recr_personal-section-content">
                <div className="recr_photo-class">
                  <h>Profile Picture</h>
                  <div className="recr_photo-upload">
                    <FontAwesomeIcon icon={faUpload} />
                    <p>
                      <h>Browse photo</h> or drop here (Max: 5MB, PNG/JPEG only)
                    </p>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="recr_photo-input"
                      onChange={handlePhotoUpload}
                    />
                  </div>
                </div>

                <div className="recr_personal-details">
                  <div className="recr_details-row-row-group">
                    <div>
                      <label>Full Name</label>
                      <input
                        type="text"
                        defaultValue={dashboardData.profile.fullName}
                        readOnly={!showProfileEdit}
                      />
                    </div>

                    <div>
                      <label>Role</label>
                      <input
                        type="text"
                        defaultValue={dashboardData.profile.role}
                        readOnly={!showProfileEdit}
                      />
                    </div>
                  </div>
                  <div className="recr_details-row-row-group">
                    <div>
                      <label>Experience</label>
                      <select
                        defaultValue={dashboardData.profile.experience}
                        disabled={!showProfileEdit}
                      >
                        <option>0-2 years</option>
                        <option>3-5 years</option>
                        <option>5-10 years</option>
                        <option>10+ years</option>
                      </select>

                      <label style={{ marginTop: "10px" }}>
                        Present Company
                      </label>
                      <input
                        type="text"
                        defaultValue={dashboardData.profile.company}
                        readOnly={!showProfileEdit}
                        className="recr_full-width-input"
                      />
                      {/* <select
                        defaultValue={dashboardData.profile.education}
                        disabled={!showProfileEdit}
                      >
                        <option>Bachelor's</option>
                        <option>Master's</option>
                        <option>PhD</option>
                      </select> */}
                    </div>
                  </div>
                  <div>
                    <label>Personal Website</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="text"
                        defaultValue={dashboardData.profile.personalWebsite}
                        readOnly={!showProfileEdit}
                        className="recr_full-width-input"
                      />
                      <span className="recr_link-icon">🔗</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowProfileEdit(!showProfileEdit)}
                className="recr_personal-section-buttons"
              >
                {showProfileEdit ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="recr_profile-details">
            <h2>Profile Information</h2>

            {/* Nationality and Date of Birth */}
            <div className="recr_profile-details-row">
              <div>
                <label>Nationality</label>
                <select
                  defaultValue={dashboardData.profile.nationality}
                  disabled={!showProfileEdit}
                >
                  <option>USA</option>
                  <option>Canada</option>
                  {/* Add other nationalities here */}
                </select>
              </div>
              <div>
                <label>Date of Birth</label>
                <input
                  type="date"
                  defaultValue={dashboardData.profile.dob}
                  readOnly={!showProfileEdit}
                />
              </div>
            </div>

            {/* Gender and Martial Status */}
            <div className="recr_profile-details-row">
              <div>
                <label>Gender</label>
                <select
                  defaultValue={dashboardData.profile.gender}
                  disabled={!showProfileEdit}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label>Martial Status</label>
                <select
                  defaultValue={dashboardData.profile.maritalStatus}
                  disabled={!showProfileEdit}
                >
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
              </div>
            </div>

            {/* Phone and Email */}
            <div className="recr_profile-details-row">
              <div>
                <label>Phone No</label>
                <input
                  type="text"
                  defaultValue={dashboardData.profile.phone}
                  readOnly={!showProfileEdit}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  defaultValue={dashboardData.profile.email}
                  readOnly={!showProfileEdit}
                />
              </div>
            </div>

            <div className="recr_profile-details-row">
              <div>
                <label>Current Location</label>
                <input
                  type="text"
                  defaultValue={dashboardData.profile.currentCompany}
                  readOnly={!showProfileEdit}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="recr_profile-bio">
              <label>Bio</label>

              <textarea
                defaultValue={dashboardData.profile.bio}
                readOnly={!showProfileEdit}
                placeholder="Write down your bio..."
              />
            </div>

            {/* Edit/Save Button */}
            <button
              onClick={() => setShowProfileEdit(!showProfileEdit)}
              className="recr_profile-section-buttons"
            >
              {showProfileEdit ? "Save" : "Edit"}
            </button>
          </div>
        );
      case "social":
        return (
          <div className="recr_social-links-section">
            <h2>Social Links</h2>

            {socialLinks.map((social, index) => (
              <div className="recr_social-link-row" key={index}>
                <div className="recr_social-platform">
                  <FontAwesomeIcon
                    icon={
                      platformIcons[social.platform] || platformIcons.default
                    }
                    className="recr_platform-icon"
                  />
                  <select
                    value={social.platform}
                    onChange={(e) =>
                      handleInputChange(index, "platform", e.target.value)
                    }
                  >
                    <option value="">Select Platform</option>
                    <option value="Github">Github</option>
                    <option value="Twitter">Twitter</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                  </select>
                </div>
                <div className="recr_social-url">
                  <input
                    type="text"
                    placeholder="Profile link/URL"
                    value={social.link}
                    onChange={(e) =>
                      handleInputChange(index, "link", e.target.value)
                    }
                    className="recr_social-url-input"
                  />

                  <button
                    className="recr_social-remove-btn"
                    onClick={() => handleRemoveLink(index)}
                  >
                    <span style={{ backgroundColor: "white" }}>✖️</span>
                  </button>
                </div>
              </div>
            ))}

            <button
              className="recr_add-social-link-btn"
              onClick={handleAddNewLink}
            >
              + Add New Social Link
            </button>

            <div className="recr_action-buttons">
              <button className="recr_social-save-btn">Save</button>
            </div>
          </div>
        );

      case "account":
        return (
          <div className="recr_account-settings-section">
            <h2>Contact Info</h2>

            {/* Address Section */}
            <div className="recr_account-input-container">
              <label>Address</label>
              <div className="recr_account-input-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <input
                  type="text"
                  placeholder="Enter your Address"
                  className="recr_account-full-width"
                  // defaultValue={dashboardData.account.address}
                  readOnly={!showAccountEdit}
                />
              </div>
            </div>

            {/* Phone Section */}
            <div className="recr_account-input-container">
              <label>Phone</label>
              <div className="recr_account-input-box">
                <FontAwesomeIcon icon={faPhone} />
                <select
                  className="recr_account-country-dropdown"
                  disabled={!showAccountEdit}
                  // defaultValue={dashboardData.account.phoneCountry}
                >
                  <option value="US">+1 USA</option>
                  <option value="IN">+91 India</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="recr_account-full-width"
                  // defaultValue={dashboardData.account.phone}
                  readOnly={!showAccountEdit}
                />
              </div>
            </div>

            {/* Email Section */}
            <div className="recr_account-input-container">
              <label>Email</label>
              <div className="recr_account-input-box">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="recr_account-full-width"
                  // defaultValue={dashboardData.account.email}
                  readOnly={!showAccountEdit}
                />
              </div>
            </div>

            {/* Edit/Save Button */}
            <button
              onClick={() => setShowAccountEdit(!showAccountEdit)}
              className="recr_account-section-buttons"
            >
              {showAccountEdit ? "Save" : "Edit"}
            </button>

            <div className="recr_password-change-section">
              <h2>Change Password</h2>

              <div className="recr_password-change-container">
                {/* Current Password */}
                <div className="recr_password-input-container">
                  <label>Current Password</label>
                  <div className="recr_password-input-box">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Enter current password"
                      className="recr_account-full-width"
                    />
                    <span
                      className="recr_password-eye-icon"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? "👁" : "👁‍🗨"}
                    </span>
                  </div>
                </div>

                {/* New Password */}
                <div className="recr_password-input-container">
                  <label>New Password</label>
                  <div className="recr_password-input-box">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      className="recr_account-full-width"
                    />
                    <span
                      className="recr_password-eye-icon"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? "👁" : "👁‍🗨"}
                    </span>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="recr_password-input-container">
                  <label>Confirm Password</label>
                  <div className="recr_password-input-box">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter new password"
                      className="recr_account-full-width"
                    />
                    <span
                      className="recr_password-eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "👁" : "👁‍🗨"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button className="recr_account-section-buttons">Save</button>
            </div>

            <div className="recr_dlt-settings-section">
              <h2>Delete Your Account</h2>
              <div className="recr_delete-account-section">
                <p className="recr_delete-account-warning">
                  If you delete your account, you will no longer be able to get
                  information about the matched jobs, following employers, job
                  alerts, shortlisted jobs, and more. You will be abandoned from
                  all the services of <strong>The Datanauts</strong>.
                </p>

                <button className="recr_delete-account-button">
                  × Delete Account
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="recr_tab-content">Select a setting</div>;
    }
  };

  return (
    <div className="recr_idontknow">
      <div className="recr_applied-jobs">
        <h2>Settings </h2>
        <div className="recr_settings-container">
          <header className="recr_settings-header">
            <div
              className={`settings-tab ${
                activeTab === "personal" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Personal")}
            >
              <span className="recr_settings-icon">👤</span> Personal
            </div>

            <div
              className={`settings-tab ${
                activeTab === "profile" ? "active" : ""
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <span className="recr_settings-icon">🧑</span> Profile
            </div>

            <div
              className={`settings-tab ${
                activeTab === "social" ? "active" : ""
              }`}
              onClick={() => setActiveTab("social")}
            >
              <span className="recr_settings-icon">🌐</span> Social
            </div>
            <div
              className={`settings-tab ${
                activeTab === "account" ? "active" : ""
              }`}
              onClick={() => setActiveTab("account")}
            >
              <span className="recr_settings-icon">🔒</span> Account Settings
            </div>
          </header>

          <main className="recr_settings-content">
            {renderSettingsContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default RecruiterSetting;
