import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import ViewProfile from "./Components/ViewProfile";
import DraftedJobs from "./Components/DraftedJobs";
import JobPost from "./Components/Recruiter/JobPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recdashboard" element={<Dashboard />} />
        <Route path="/viewprofile" element={<ViewProfile/>} />

        <Route path="/draft-jobs" element={<DraftedJobs />} />
        <Route path="/job-post" element={<JobPost />} />
        {/* <Route path="/applyjobs" element={<Applyjobs />} />
        <Route path="/jobdetails/:id" element={<JobDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
