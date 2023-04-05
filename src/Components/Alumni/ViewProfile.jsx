
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";

function Profile() {
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
            <div style={{ "marginBottom": "10%" }}>
                <Navbar />

                <div className="container-fuid" >
                    <h3><u>{data.userName}'s Profile:</u></h3>
                    <br />


                    <div className="forborder border border-dark mt-2 mx-auto" style={{ "width": "60%" }}>
                        <div className="">
                            <div className="">

                                <br />
                                <img src={`http://localhost:8080/${data.profileImage}`}
                                    className=" rounded-circle" style={{ "height": "150px", "width": "150px" }} />

                                <br />
                                <br />

                                <b className="fs-5 ">Name:</b>
                                <p className="fs-5 ">{data.userName}</p>

                                <b className="fs-5">About Me:</b>
                                <div className="fs-5">{data.description}</div>
                                <br />





                                <b className="fs-5">Mobile/Telephone:</b>
                                <div className="fs-5">{data.phoneNo}</div>
                                <br />

                                <b className="fs-5">Email Id:</b><br />
                                <a href="#">{data.email}</a>
                                <br /><br />

                                <b className="fs-5">Date Of Birth:</b>
                                <div className="fs-5">{data.dob}</div>
                                <br />



                                <b className="fs-5">Gender:</b>
                                <div className="fs-5">{data.gender}</div>

                                <br />

                                <b className="fs-5">Educational Qualifications:</b>
                                <div className="fs-5">{data.qualification}</div>

                                <br />

                                <b className="fs-5">Past Experience:</b>
                                <div className="fs-5">{data.prevWork}</div>
                                <br />



                            </div>


                        </div>


                    </div>
                </div>
            </div>
        )
    }

export default Profile;


