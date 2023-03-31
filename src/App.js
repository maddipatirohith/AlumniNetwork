import "./App.css";
import SignUp from "./Components/LandingPages/Register";
import LandingPage from "./Components/LandingPages/Landing";
import SignIn from "./Components/LandingPages/SignIn";

import AlumniLanding from "./Components/Alumni/Landing";
import UpdateProfile from "./Components/Alumni/UpdateProfile";
import Events from "./Components/Alumni/Events&Notice";
import Profile from "./Components/Alumni/ViewProfile";

import CollegeLanding from "./Components/College/Landing"
import CollegeEvents from "./Components/College/Events&Notice"
import NewRequests from "./Components/College/NewRequests";
import CreateEvents from "./Components/College/CreateEvents";
import CreateNotices from "./Components/College/CreateNotices"

import CompanyLanding from "./Components/Company/Landing";
import ViewProfile from "./Components/Company/ViewProfile";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <Routes>
        <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/SignIn"  element={<SignIn/>} />

        <Route path="/alumni" element={< AlumniLanding />} />  
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
        <Route path="/Profile" element={<Profile />}  />
        <Route path="/Events" element={<Events />} />

        <Route path="/college" element={<CollegeLanding />}  /> 
        <Route path="/collegeEvents" element={<CollegeEvents />}  />  
        <Route path="/NewRequests" element={<NewRequests />}  />
        <Route path="/CreateEvents" element={<CreateEvents/>}   />
        <Route path="/CreateNotices" element={<CreateNotices/>}   />
          
          <Route path="/company" element={<CompanyLanding/>}   />
          <Route path="/company/profile" element={<ViewProfile/>} />
                                </>
      </Routes>
    </div>
  );
}

export default App;
