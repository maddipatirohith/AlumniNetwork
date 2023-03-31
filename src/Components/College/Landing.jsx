import React from "react";
import Navbar from "./Navbar";
const CollegeLanding = () => {
    return (
        <div>
            <Navbar />
            <h2>Welcome Back Super Admin!</h2>
            <a href="/college/newRequests">
                <button className="btn btn-primary">Authenticate New Users</button>
            </a>

        </div>
    );
}
export default CollegeLanding;