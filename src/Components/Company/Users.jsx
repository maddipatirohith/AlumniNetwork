/* disable eslint */
import React from "react";
import { useNavigate } from 'react-router-dom'


function Card(props) {

    const navigate = useNavigate();

    const handleDownload=()=>{

    }
    const handleView=()=>{
        localStorage.setItem('userId', props._id);
        navigate('/company/profile')
    }


    return (
        <div>
            <div className="card card-component text-left  col-lg-8 " style={{ "borderRadius": "15px", "textAlign": "left" }}>

                <div className="card-body ">
                    <img className="rounded float-end" src="../logo512.png" style={{ "height": "150px", "width": "150px" }} />

                    <h5 className="card-title " style={{ "marginLeft": "10px" }}>{props.userName}</h5>

                    <div className="row mb-1">
                        <h6 className=" mb-0 text-muted  ">{props.email}</h6>
                        {/* <p className="  mb-0 font-weight-light text-muted col"> </p> */}
                    </div>

                    <div className="row mb-1">
                        <h6 className=" mb-0  text-muted">{props.phoneNo}</h6>
                        {/* <p className=" font-weight-light col mb-0 text-muted "></p> */}
                    </div>

                    <div className="row mb-1">
                        <h6 className=" mb-0 text-muted">{props.college}</h6>
                        {/* <p className=" font-weight-normal col mb-0 text-muted "></p> */}
                    </div>

                    <p className="row mb-2  text-muted " style={{ "marginLeft": "10px" }}>{props.description}</p>

                     <button className="btn btn-success btn-sm mt-1" style={{ marginLeft: "5px", marginRight: "25px" }}
                    onClick={handleDownload} >Download CV</button>
                    <button className="btn btn-primary btn-sm mt-1" 
                    onClick={handleView} >View Profile</button>

                    

                </div>
            </div>

        </div>
    )
}
export default Card;