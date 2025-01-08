import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SavedCandidatesPage.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const savedCandidatesJson = [
  {
    id: 1,
    name: "John Doe",
    profileLink: "/profile/john-doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileLink: "/profile/jane-smith",
  },
  {
    id: 3,
    name: "Emily Johnson",
    profileLink: "/profile/emily-johnson",
  },
];

const SavedCandidatesPage = () => {
 

  const [candidates, setCandidates] = useState(savedCandidatesJson);
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/viewprofile", { state: { from: "SavedCandidatesPage" } });
  };

  const handleRemove = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  return (
    <div className="Recrsaved-candidates-page">
      <h2 className="Recrheader">Saved Candidates</h2>
      <div className="Recrcandidate-list">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="Recrcandidate-row">
            <span className="Recrcandidate-name">{candidate.name}</span>
            <button
              className="Recrview-profile-btn"
              onClick={handleViewProfile}
            >
              View Profile
            </button>
            <button
              className="Recrremove-btn"
              onClick={() => handleRemove(candidate.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCandidatesPage;
