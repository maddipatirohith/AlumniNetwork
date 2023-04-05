/*  eslint-disable*/
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";

const userLanding = () => {
    const [data, setData] = useState({});

    const token = localStorage.getItem("token");

    useEffect(() => {
        getUser()
    }, [])

    //Fetch user data to display 
    const getUser = async () => {

        const userInfo = await fetch("http://localhost:8080/auth/getuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        const Info = await userInfo.json()
        setData(Info)
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <h4>Welcome back {data.userName}!</h4>


                <div className="row ">
                    <div className="col-12">
                        <img src="https://img.freepik.com/free-vector/hackathon-technology-infographic-with-flat-icons_88138-961.jpg?w=2000" style={{ "width": "100%" }}
                            alt="Job Opportunities" />
                        <img src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" alt="Haxkathon" style={{ "width": "100%" }} />
                        <br /><br />
                        <img src="https://contentstatic.techgig.com/photo/82260703.cms" alt="Machine" style={{ "width": "85%" }} />
                        <br /><br />

                        <br /><br />
                    </div>

                    <div className="col-md-12">

                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="4000">
                                    <img src="./1.jpg" className="d-block  img-fluid"
                                        alt=".." style={{ "width": "95%", "height": "50%" }} />
                                </div>
                                <div className="carousel-item" data-bs-interval="1200">
                                    <img src="./2.png"
                                        className="d-block " alt="..." style={{ "width": "95%", "height": "50%" }} />
                                </div>
                                <div className="carousel-item" data-bs-interval="1200">
                                    <img src="./3.jpg"
                                        className="d-block " alt="..." style={{ "width": "95%", "height": "50%" }} />
                                </div>
                                <div className="carousel-item" data-bs-interval="1200">
                                    <img src="./4.jpg"
                                        className="d-block " alt="..." style={{ "width": "95%", "height": "50%" }} />
                                </div>
                                <div className="carousel-item" data-bs-interval="1200">
                                    <img src="./5.webp"
                                        className="d-block " alt="..." style={{ "width": "95%", "height": "50%" }} />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    )
}


export default userLanding;