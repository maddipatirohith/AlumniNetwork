// Importing required CSS and components
import "./App.css";

import Protected from "./Protected";

import SignUp from "./Components/LandingPages/Register";
import LandingPage from "./Components/LandingPages/Landing";
import SignIn from "./Components/LandingPages/SignIn";

import AlumniLanding from "./Components/Alumni/Landing";
import UpdateProfile from "./Components/Alumni/UpdateProfile";
import Events from "./Components/Alumni/Events&Notice";
import Profile from "./Components/Alumni/ViewProfile";

import CollegeLanding from "./Components/College/Landing";
import CollegeEvents from "./Components/College/Events&Notice";
import NewRequests from "./Components/College/NewRequests";
import CreateEvents from "./Components/College/CreateEvents";
import CreateNotices from "./Components/College/CreateNotices";

import CompanyLanding from "./Components/Company/Landing";
import ViewProfile from "./Components/Company/ViewProfile";

import { Routes, Route } from "react-router-dom";  // Importing routing components from React Router

function App() {
  return (
    <div class="App">  {/* Main container for the app */}
      <Routes>  {/* Defining the routes for different components */}
        <>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />  {/* Route for the landing page */}
          <Route path="/Register" element={<SignUp />} />  {/* Route for the sign-up page */}
          <Route path="/SignIn"  element={<SignIn/>} />  {/* Route for the sign-in page */}

          {/* Alumni Routes (Protected) */}
          <Route path="/alumni" element={<Protected Component={AlumniLanding} />} />  {/* Route for alumni landing page */}
          <Route path="/UpdateProfile" element={<Protected Component={UpdateProfile} />} />  {/* Route for updating profile */}
          <Route path="/Profile" element={<Protected Component={Profile} />}  />  {/* Route for viewing profile */}
          <Route path="/Events" element={<Protected Component={Events} />} />  {/* Route for viewing events */}

          {/* College Routes (Protected) */}
          <Route path="/college" element={<Protected Component={CollegeLanding} />}  />  {/* Route for college landing page */}
          <Route path="/collegeEvents" element={<Protected Component={CollegeEvents} />}  />  {/* Route for viewing college events */}
          <Route path="/NewRequests" element={<Protected Component={NewRequests} />}  />  {/* Route for viewing new requests */}
          <Route path="/CreateEvents" element={<Protected Component={CreateEvents}/>}   />  {/* Route for creating events */}
          <Route path="/CreateNotices" element={<Protected Component={CreateNotices}/>}   />  {/* Route for creating notices */}

          {/* Company Routes (Protected) */}
          <Route path="/company" element={<Protected Component={CompanyLanding}/>}   />  {/* Route for company landing page */}
          <Route path="/company/profile" element={<Protected Component={ViewProfile}/>} />  {/* Route for viewing company profile */}
        </>
      </Routes>
    </div>
  );
}

export default App;  // Exporting the App component as default

