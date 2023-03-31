import React from 'react';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate=useNavigate()

    const onClick=()=>{
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg  sticky-top   " style={{ "fontSize": "17px", "backgroundColor": "white" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/college">Alumni Network</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link" href="/collegeEvents">Events/Notices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/CreateEvents">Add Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/createNotices">Add Notices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/NewRequests">New Users</a>
                                </li>



                            </ul>
                        </div>
                        <ul className="navbar-nav mx-auto ">

                            <li className="nav-item ">
                                <a className="nav-link" >
                                    <button className="btn px-5 btn-block btn-outline-light btn-danger"
                                    onClick={onClick}>  Logout  </button></a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        </div>

    )
}
export default Navbar;