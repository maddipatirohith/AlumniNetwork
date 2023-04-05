import "./App.css";

import Protected from "./Protected";

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

        <Route path="/alumni" element={< Protected Component={AlumniLanding} />} />  
        <Route path="/UpdateProfile" element={< Protected Component={UpdateProfile} />} />
        <Route path="/Profile" element={<Protected Component={Profile} />}  />
        <Route path="/Events" element={<Protected Component={Events} />} />

        <Route path="/college" element={<Protected Component={CollegeLanding} />}  /> 
        <Route path="/collegeEvents" element={<Protected Component={CollegeEvents} />}  />  
        <Route path="/NewRequests" element={<Protected Component={NewRequests} />}  />
        <Route path="/CreateEvents" element={<Protected Component={CreateEvents}/>}   />
        <Route path="/CreateNotices" element={<Protected Component={CreateNotices}/>}   />
          
          <Route path="/company" element={<Protected Component={CompanyLanding}/>}   />
          <Route path="/company/profile" element={<Protected Component={ViewProfile}/>} />
                                </>
      </Routes>
    </div>
  );
}

export default App;
