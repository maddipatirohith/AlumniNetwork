import React from 'react';

const Mynavbar = () => {
    return (

        <div className="container-fluid">
            <nav className="navbar fs-large navbar-expand-lg sticky-top navbar-light "
                style={{ "backgroundColor": "", "paddingLeft": "10px" }}>

                <a className="navbar-brand" href="#">ALUMNI NETWORK</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse   " id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item" >
                            <a className="nav-link " href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item ">
                            <a className="nav-link" href="Register">
                                <button className="btn px-5 btn-block btn-outline-dark " >  SignUp  </button></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="signin">
                                <button className="btn px-5 btn-block btn-outline-dark ">  Login  </button></a>
                        </li>

                    </ul>




                </div>

            </nav>
        </div>


    )
}
export default Mynavbar