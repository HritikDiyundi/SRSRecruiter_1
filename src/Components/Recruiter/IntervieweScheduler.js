import React, { useState } from "react";
import "./InterviewScheduler.css";

const InterviewScheduler = () => {
  // Dummy data for candidate availability
  const [availability, setAvailability] = useState([
    { candidateName: "Alice Johnson", timeSlot: "2024-12-31T10:00" },
    { candidateName: "Bob Smith", timeSlot: "2024-12-31T11:30" },
    { candidateName: "Charlie Brown", timeSlot: "2024-12-31T14:00" },
    { candidateName: "Charlie Brown", timeSlot: "2024-12-31T14:00" },
    // { candidateName: "Charlie Brown", timeSlot: "2024-12-31T14:00" },
  ]);

  // Dummy data for scheduled interviews
  const [scheduledInterviews, setScheduledInterviews] = useState([
    { candidateName: "Eve Adams", timeSlot: "2024-12-30T09:00" },
  ]);

  // Handle interview scheduling
  const handleScheduleInterview = (index) => {
    const selectedSlot = availability[index];
    setScheduledInterviews([...scheduledInterviews, selectedSlot]);
    setAvailability(availability.filter((_, i) => i !== index));
  };

  return (
    <div className="scheduler-container">
      <h1>Interview Scheduler</h1>

      <div className="candidate-section">
        <h2>Available Candidates</h2>
        <div className="availability-table">
          <table>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Available Date & Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {availability.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No available slots yet.
                  </td>
                </tr>
              ) : (
                availability.map((slot, index) => (
                  <tr key={index}>
                    <td>{slot.candidateName}</td>
                    <td>{new Date(slot.timeSlot).toLocaleString()}</td>
                    <td>
                      <button onClick={() => handleScheduleInterview(index)}>
                        Schedule
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="recruiter-section">
        <h2>Scheduled Interviews</h2>
        <div className="scheduled-table">
          <table>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Scheduled Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {scheduledInterviews.length === 0 ? (
                <tr>
                  <td colSpan="2" style={{ textAlign: "center" }}>
                    No interviews scheduled yet.
                  </td>
                </tr>
              ) : (
                scheduledInterviews.map((slot, index) => (
                  <tr key={index} className="pending">
                    <td>{slot.candidateName}</td>
                    <div></div>
                    <td>{new Date(slot.timeSlot).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduler;