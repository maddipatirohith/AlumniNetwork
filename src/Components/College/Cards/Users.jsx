import React from "react";
import { useNavigate } from 'react-router-dom'


function Card(props) {

    const navigate = useNavigate();

     const handleAccept = async (e) => {
 
         const response = await fetch('http://localhost:8080/api/acceptNewRequests', {
             method: 'Post',
             headers: { 
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({ id: props._id })
         })
         window.location.reload(false);
       
 
     }
 
     const handleReject = async (e) => {
         const response = await fetch('http://localhost:8080/api/rejectNewRequests', {
             method: 'Post',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({ id: props._id })
         })

         window.location.reload(true);
     }


    return (
        <div>
            <div className="card card-component text-left  col-lg-8 " style={{ "borderRadius": "15px", "textAlign": "left" }}>

                <div className="card-body ">
                    <img className="rounded float-end" src="../logo512.png" style={{ "height": "150px", "width": "150px" }} />

                    <h5 className="card-title " style={{ "marginLeft": "10px" }}>{props.userName}</h5>

                    <div className="row mb-1">
                        <h6 className=" mb-0 text-muted  ">{props.email}</h6>
                        
                    </div>

                    <div className="row mb-1">
                        <h6 className=" mb-0  text-muted">{props.phoneNo}</h6>
                        
                    </div>

                    <div className="row mb-1">
                        <h6 className=" mb-0 text-muted">{props.college}</h6>
                        
                    </div>

                    <p className="row mb-2  text-muted " style={{ "marginLeft": "10px" }}>{props.description}</p>

                     <button className="btn btn-success btn-sm" style={{ padding: "5px 50px", marginLeft: "0px", marginRight: "25px" }}
                    onClick={handleAccept} >Accept</button>

                    <button className="btn btn-danger btn-sm" style={{ padding: "5px 50px", marginLeft: "-15px" }} 
                    onClick={handleReject}>Reject</button>

                </div>
            </div>

        </div>
    )
}
export default Card;