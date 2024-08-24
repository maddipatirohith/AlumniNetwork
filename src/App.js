// Import the required CSS file for styling the application
import "./App.css";

// Import the Protected component to wrap routes that require authentication
import Protected from "./Protected";

// Import components for different landing pages and forms
import SignUp from "./Components/LandingPages/Register";
import LandingPage from "./Components/LandingPages/Landing";
import SignIn from "./Components/LandingPages/SignIn";

// Import components for the Alumni section of the application
import AlumniLanding from "./Components/Alumni/Landing";
import UpdateProfile from "./Components/Alumni/UpdateProfile";
import Events from "./Components/Alumni/Events&Notice";
import Profile from "./Components/Alumni/ViewProfile";

// Import components for the College section of the application
import CollegeLanding from "./Components/College/Landing";
import CollegeEvents from "./Components/College/Events&Notice";
import NewRequests from "./Components/College/NewRequests";
import CreateEvents from "./Components/College/CreateEvents";
import CreateNotices from "./Components/College/CreateNotices";

// Import components for the Company section of the application
import CompanyLanding from "./Components/Company/Landing";
import ViewProfile from "./Components/Company/ViewProfile";

// Import the Routes and Route components from React Router for routing
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="App">
      /* Define the application's routing structure */
      <Routes>
        <>
          /* Public routes */
          <Route path="/" element={<LandingPage />} />
          <Route path="/Register" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />

          /* Protected routes for Alumni section */
          <Route path="/alumni" element={<Protected Component={AlumniLanding} />} />  
          <Route path="/UpdateProfile" element={<Protected Component={UpdateProfile} />} />
          <Route path="/Profile" element={<Protected Component={Profile} />} />
          <Route path="/Events" element={<Protected Component={Events} />} />

          /* Protected routes for College section */
          <Route path="/college" element={<Protected Component={CollegeLanding} />} /> 
          <Route path="/collegeEvents" element={<Protected Component={CollegeEvents} />} />  
          <Route path="/NewRequests" element={<Protected Component={NewRequests} />} />
          <Route path="/CreateEvents" element={<Protected Component={CreateEvents} />} />
          <Route path="/CreateNotices" element={<Protected Component={CreateNotices} />} />

          /* Protected routes for Company section */
          <Route path="/company" element={<Protected Component={CompanyLanding} />} />
          <Route path="/company/profile" element={<Protected Component={ViewProfile} />} />
        </>
      </Routes>
    </div>
  );
}

export default App;

